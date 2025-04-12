document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const lights = document.querySelectorAll('.light');
    
    // إنشاء أضواء عشوائية
    function createLights() {
        lights.forEach(light => {
            // أحجام عشوائية
            const size = Math.random() * 200 + 50;
            light.style.width = `${size}px`;
            light.style.height = `${size}px`;
            
            // مواقع عشوائية
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            light.style.left = `${x}px`;
            light.style.top = `${y}px`;
            
            // تأخير عشوائي للظهور
            const delay = Math.random() * 5;
            light.style.animationDelay = `${delay}s`;
            
            // توهج عشوائي
            animateLight(light);
        });
    }
    
    // تحريك الأضواء
    function animateLight(light) {
        const duration = Math.random() * 3 + 2;
        const opacity = Math.random() * 0.5 + 0.1;
        
        light.style.transition = `opacity ${duration}s ease-in-out`;
        light.style.opacity = opacity;
        
        setTimeout(() => {
            light.style.opacity = '0';
            setTimeout(() => {
                animateLight(light);
            }, Math.random() * 2000);
        }, duration * 1000);
    }
    
    // إعادة ترتيب الأضواء عند تغيير حجم النافذة
    window.addEventListener('resize', createLights);
    
    // بدء التشغيل
    createLights();
    
    // تأثيرات إضافية عند تحريك الماوس
    container.addEventListener('mousemove', (e) => {
        const cube = document.querySelector('.cube');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // إعادة المكعب إلى وضعه الطبيعي عند مغادرة الماوس
    container.addEventListener('mouseleave', () => {
        const cube = document.querySelector('.cube');
        cube.style.transform = 'rotateX(0) rotateY(0)';
    });
});