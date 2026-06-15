// 1. Barra de progresso de leitura conforme o scroll
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// 2. Simulador de CO2 economizado em tempo real
// Demonstra de forma lúdica a eficiência do carregamento da página
let co2Counter = 0;
const counterElement = document.getElementById('co2-counter');

function updateCounter() {
    // Simula micro-gramas de CO2 economizados por segundo pelo código otimizado
    co2Counter += 0.04;
    counterElement.innerText = co2Counter.toFixed(2);
    requestAnimationFrame(updateCounter);
}
// Inicia o contador assim que a página carrega
setTimeout(updateCounter, 1000);

// 3. Alternador de Tema: Modo Eco Inteligente
const themeToggle = document.getElementById('theme-toggle');
let isUltraEco = false;

themeToggle.addEventListener('click', () => {
    isUltraEco = !isUltraEco;
    
    if (isUltraEco) {
        document.documentElement.setAttribute('data-theme', 'ultra-eco');
        themeToggle.innerText = '🔋 Modo Normal';
        // Desliga a animação pesada do orbe para economizar processamento
        document.querySelector('.orb').style.animation = 'none';
        document.querySelector('.orb').style.opacity = '0.2';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerText = '🌱 Modo Eco';
        document.querySelector('.orb').style.animation = 'pulse 6s infinite alternate';
        document.querySelector('.orb').style.opacity = '0.6';
    }
});

// Animação suave de entrada dos cards (Intersection Observer)
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});