// ==============================
// NAVEGAÇÃO SPA E INTERAÇÕES
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}

if (dropdown) {
    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });
}


// ==============================
// NAVEGAÇÃO SPA
// ==============================

const conteudoPrincipal = document.querySelector("main");

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function (evento) {

        evento.preventDefault();

        const destino = link.getAttribute("href");

        carregarPagina(destino);
    });

});


function carregarPagina(pagina) {

    fetch(pagina)
        .then(function (resposta) {
            return resposta.text();
        })

        .then(function (html) {

            const documento = new DOMParser().parseFromString(
                html,
                "text/html"
            );

            const novoConteudo = documento.querySelector("main");

            if (novoConteudo) {

                conteudoPrincipal.innerHTML = novoConteudo.innerHTML;

                history.pushState(
                    {},
                    "",
                    pagina
                );

                criarProjetos();
                configurarFormulario();
            }

        })

        .catch(function (erro) {
            console.error("Erro ao carregar a página:", erro);
        });
}


// ==============================
// BOTÕES DO MODAL
// ==============================

function abrirModal() {

    const modal = document.querySelector("#modal");

    if (modal) {
        modal.classList.add("ativo");
    }
}

function fecharModal() {

    const modal = document.querySelector("#modal");

    if (modal) {
        modal.classList.remove("ativo");
    }
}


// ==============================
// BOTÕES VOLTAR E AVANÇAR
// ==============================

window.addEventListener("popstate", function () {

    const paginaAtual = window.location.pathname.split("/").pop();

    if (paginaAtual) {
        carregarPagina(paginaAtual);
    }

});


export { carregarPagina, abrirModal, fecharModal };
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;