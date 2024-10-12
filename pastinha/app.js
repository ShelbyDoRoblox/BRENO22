const container = document.querySelector('.container');
let respostaEstaVisivel = false;

function criaCartao(pergunta, resposta) {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');

    const conteudo = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__pergunta">
                <h3>${pergunta}</h3>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;
    cartao.innerHTML = conteudo;

    cartao.addEventListener('click', (event) => {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    });

    return cartao;
}

// Cria cartões a partir das perguntas
perguntas.forEach(p => {
    const cartao = criaCartao(p.pergunta, p.resposta);
    container.appendChild(cartao);
});