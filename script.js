document.querySelectorAll('.drone-card button').forEach(btn => {
    btn.addEventListener('click', () => {
        const drone = btn.parentElement.querySelector('h3').innerText;
        const preco = btn.parentElement.querySelector('.price').innerText;

        alert(`🛒 ${drone} adicionado ao carrinho!\nValor: ${preco}`);
    });
});