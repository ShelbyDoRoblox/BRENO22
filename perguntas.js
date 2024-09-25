function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');

    const artigo = document.createElement('article');
    artigo.className = 'cartao';

    const conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';

    const titulo = document.createElement('h3');
    titulo.textContent = categoria;

    const divPergunta = document.createElement('div');
    divPergunta.className = 'cartao__conteudo__pergunta';
    const parPergunta = document.createElement('p');
    parPergunta.textContent = pergunta;
    divPergunta.appendChild(parPergunta);

    const divResposta = document.createElement('div');
    divResposta.className = 'cartao__conteudo__resposta';
    const parResposta = document.createElement('p');
    parResposta.textContent = resposta;
    divResposta.appendChild(parResposta);

    conteudo.appendChild(titulo);
    conteudo.appendChild(divPergunta);
    conteudo.appendChild(divResposta);
    artigo.appendChild(conteudo);
    container.appendChild(artigo);
}

// Adicionando os cartões
criaCartao('Programação', 'O que é JavaScript?', 'O JavaScript é uma linguagem de programação');
criaCartao('Geografia', 'Qual a capital da França?', 'A capital da França é Paris');
criaCartao('Programação', 'O que é uma função?', 'Uma função é um bloco de código que executa alguma tarefa');