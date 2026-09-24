// ==============================
// FORMULÁRIO E LOCALSTORAGE
// ==============================

function configurarFormulario() {

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const nascimento = document.querySelector("#nascimento");
    const cep = document.querySelector("#cep");

    // Recuperar dados salvos
    const dadosSalvos = localStorage.getItem("dadosVoluntario");

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        nome.value = dados.nome || "";
        email.value = dados.email || "";
        telefone.value = dados.telefone || "";
        nascimento.value = dados.nascimento || "";
        cep.value = dados.cep || "";
    }

    // Salvar dados ao enviar o formulário
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const dados = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            nascimento: nascimento.value,
            cep: cep.value
        };

        localStorage.setItem(
            "dadosVoluntario",
            JSON.stringify(dados)
        );

        Swal.fire({
            title: "Cadastro salvo!",
            text: "Seus dados foram salvos com sucesso.",
            icon: "success"
        });
    });
}

export { configurarFormulario };
