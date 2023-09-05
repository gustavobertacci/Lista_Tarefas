function carregarAparelho(id) {
    const aparelho = encontrarAparelhoPorId(id);

    if (aparelho) {
        const detalhesAparelho = document.getElementById("detalhes-aparelho");

        // Atualize o conteúdo da página com os detalhes do aparelho
        detalhesAparelho.innerHTML = `
            <h2>${aparelho.nome}</h2>
            <img src="${aparelho.imagem}" alt="${aparelho.nome}">
            <p>${aparelho.descricao}</p>
            <p>Preço: R$ ${aparelho.preco.toFixed(2)}</p>
        `;
    } else {
        // Se o aparelho não for encontrado, redirecione para a página de erro 404
        window.location.href = "404.html";
    }
}

const aparelhos = [
    {
        nome: "Smartphone 1",
        descricao: "Um ótimo smartphone com muitos recursos.",
        preco: 999.99,
        imagem: "imagem1.jpg",
    },
    {
        nome: "Tablet 1",
        descricao: "Um tablet de alta qualidade para todas as necessidades.",
        preco: 499.99,
        imagem: "imagem2.jpg",
    },
    {
        nome: "Smartphone 2",
        descricao: "Um smartphone com excelente desempenho.",
        preco: 799.99,
        imagem: "imagem3.jpg",
    },
    {
        nome: "Tablet 2",
        descricao: "Um tablet versátil e elegante.",
        preco: 299.99,
        imagem: "imagem4.jpg",
    },
    {
        nome: "Smartphone 3",
        descricao: "O smartphone mais recente com tecnologia de ponta.",
        preco: 1099.99,
        imagem: "imagem5.jpg",
    },
];

// Função para gerar a lista de aparelhos na página "Aparelhos"
function gerarListaAparelhos() {
    const listaAparelhos = document.getElementById("lista-aparelhos");

    aparelhos.forEach(aparelho => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${aparelho.nome}</h3>
            <p>${aparelho.descricao}</p>
            <p>Preço: R$ ${aparelho.preco.toFixed(2)}</p>
            <img src="${aparelho.imagem}" alt="${aparelho.nome}">
        `;
        listaAparelhos.appendChild(listItem);
    });
}

// Chame a função para gerar a lista de aparelhos
gerarListaAparelhos();