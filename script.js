
/* Botão de modo claro e escuro */

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        btnTema.textContent = "Mudar para modo claro";
    } else {
        btnTema.textContent = "Mudar para modo escuro";
    }

});


/* Botão de mostrar e esconder curiosidades */

const btnCuriosidades = document.getElementById("btnCuriosidades");
const lista = document.getElementById("curiosidades");

btnCuriosidades.addEventListener("click", function() {

    lista.hidden = !lista.hidden;

    if (lista.hidden) {
        btnCuriosidades.textContent = "Mostrar curiosidades";
    } else {
        btnCuriosidades.textContent = "Esconder curiosidades";
    }

});
