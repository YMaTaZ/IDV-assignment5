// 可以在这里添加交互功能
// 例如：为SVG添加点击事件，实现动态变换效果

// 示例：为所有SVG添加点击旋转效果
document.addEventListener('DOMContentLoaded', function() {
    const svgs = document.querySelectorAll('svg');
    
    svgs.forEach(svg => {
        // 添加点击事件监听器
        svg.addEventListener('click', function() {
            // 切换旋转类
            this.classList.toggle('rotate-180');
            
            // 添加动画效果
            this.style.transition = 'transform 0.3s ease';
        });
    });
});
