// 1. Barra de rolagem superior e Contador
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById('progress-bar').style.width = (winScroll / height) * 100 + '%';
});

let waterSaved = 1425800;
function updateWaterCounter() {
    waterSaved += Math.floor(Math.random() * 3) + 1;
    document.getElementById('water-counter').innerText = waterSaved.toLocaleString('pt-BR');
    setTimeout(updateWaterCounter, 1500);
}
updateWaterCounter();

// 2. Banco de Dados das Opções Tecnológicas
const techData = {
    "card-servidores": {
        title: "Infraestrutura de Servidores Verdes",
        description: "Escolha onde e como os dados de mapeamento e telemetria do seu drone serão processados na nuvem eco-friendly:",
        options: [
            {
                name: "Nuvem Solar (Deserto de Atacama)",
                desc: "Latência mínima para as Américas, operando 100% com energia solar direta.",
                img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80"
            },
            {
                name: "DataCenter Eólico (Mar do Norte)",
                desc: "Resfriamento hidrodinâmico natural com energia vinda de turbinas eólicas marítimas.",
                img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80"
            }
        ]
    },
    "card-codigo": {
        title: "Nível de Otimização de Código (IA)",
        description: "Selecione o cérebro algorítmico do drone. Códigos mais limpos economizam ciclos de CPU e poupam energia física da bateria:",
        options: [
            {
                name: "Algoritmo Green-Path 2.0",
                desc: "Foca em trajetórias matemáticas puras, reduzindo em 30% o tempo de motor ligado.",
                img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80"
            },
            {
                name: "Rede Neural Preditiva de Sede",
                desc: "Prevê pontos secos antes de decolar, evitando processamento desnecessário no ar.",
                img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
            }
        ]
    },
    "card-hardware": {
        title: "Composição do Hardware Circular",
        description: "Configure os materiais de construção do chassi modular do drone EcoDrop:",
        options: [
            {
                name: "Polímero de Cânhamo e Carbono",
                desc: "Ultraleve, biodegradável no descarte final e altamente resistente a impactos.",
                img: "https://images.unsplash.com/photo-1546482502-042c14bd433c?w=400&q=80"
            },
            {
                name: "Alumínio Marinho Reciclado",
                desc: "Chassi feito com latinhas e carcaças retiradas dos oceanos. Infinitamente reciclável.",
                img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&q=80"
            }
        ]
    }
};

// 3. Lógica do Modal Dinâmico
const modal = document.getElementById('tech-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalOptionsContainer = document.getElementById('modal-options');
const closeModalBtn = document.getElementById('close-modal');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const data = techData[card.id];
        if (!data) return;

        modalTitle.innerText = data.title;
        modalDescription.innerText = data.description;
        
        modalOptionsContainer.innerHTML = "";
        data.options.forEach(opt => {
            const optionBox = document.createElement('div');
            optionBox.className = 'option-box';
            optionBox.innerHTML = `
                <div class="option-img" style="background-image: url('${opt.img}')"></div>
                <h4>${opt.name}</h4>
                <p>${opt.desc}</p>
            `;
            
            optionBox.addEventListener('click', () => {
                // Alerta personalizado com a nova marca Sustentinova
                alert(`Excelente escolha! Tecnologia "${opt.name}" integrada ao seu ecossistema Sustentinova.`);
                modal.classList.remove('active');
            });

            modalOptionsContainer.appendChild(optionBox);
        });

        modal.classList.add('active');
    });
});

closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

// 4. Modo Eco Econômico
const themeToggle = document.getElementById('theme-toggle');
let isUltraEco = false;

themeToggle.addEventListener('click', () => {
    isUltraEco = !isUltraEco;
    if (isUltraEco) {
        document.documentElement.setAttribute('data-theme', 'ultra-eco');
        themeToggle.innerText = '🔋 Modo Normal';
        document.querySelector('.drone-container').style.animation = 'none';
        document.querySelector('.laser-scanner').style.display = 'none';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerText = '🌱 Modo Eco';
        document.querySelector('.drone-container').style.animation = 'float 4s ease-in-out infinite';
        document.querySelector('.laser-scanner').style.display = 'block';
    }
});