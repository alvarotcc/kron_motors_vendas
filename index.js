document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // Lógica de Animação ao Carregar e Rolar
    const runAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Anima elementos com 'animate-on-load' imediatamente
        document.querySelectorAll('.animate-on-load').forEach(el => el.classList.add('is-visible'));
        
        // Observa elementos com 'animate-on-scroll'
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    };
    
    runAnimations();
});