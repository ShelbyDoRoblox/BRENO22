const container = document.querySelector('.container');

function viraCartao(cartao) {
    cartao.classList.toggle('flip');
}

perguntas.forEach(pergunta => {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');

    cartao.innerHTML = `
        <div class="cartao__conteudo cartao__conteudo__pergunta" style="${pergunta.background ? `background: ${pergunta.background};` : ''}">
            <h3>${pergunta.pergunta}</h3>
        </div>
        <div class="cartao__conteudo cartao__conteudo__resposta">
            <p>${pergunta.resposta}</p>
        </div>
    `;

    cartao.addEventListener('click', () => viraCartao(cartao));
    container.appendChild(cartao);
});
