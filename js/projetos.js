// ==============================
// TEMPLATE DINÂMICO DOS PROJETOS
// ==============================

const projetos = [
    {
        titulo: "Alimento para Todos",
        descricao: "Arrecadamos e distribuímos alimentos para famílias que precisam de apoio."
    },
    {
        titulo: "Doe Esperança",
        descricao: "Promovemos campanhas de arrecadação de roupas, materiais escolares e outros itens essenciais."
    },
    {
        titulo: "Seja Voluntário",
        descricao: "Pessoas que desejam ajudar podem participar das nossas ações e projetos sociais."
    }
];

function criarProjetos() {

    const container = document.querySelector(".grid-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    projetos.forEach(function (projeto) {

        const card = `
            <article class="grid-item">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;

        container.innerHTML += card;
    });
}

export { criarProjetos };
