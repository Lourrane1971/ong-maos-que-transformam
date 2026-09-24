// ==============================
// ARQUIVO PRINCIPAL
// ==============================

import { criarProjetos } from "./projetos.js";
import { configurarFormulario } from "./formulario.js";
import { carregarPagina } from "./spa.js";

document.addEventListener("DOMContentLoaded", function () {

    criarProjetos();
    configurarFormulario();

});