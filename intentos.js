var mensaje_superior = document.querySelector("#msj_sup");
var mensaje_inferior = document.querySelector("#msj_inf");
var msj_sup_fin = "¡Fin del juego!";
var nombre_ahorcado = sessionStorage.getItem("nombre_ahorcado",nombre_ahorcado);
var msj_inf_fin = "Lo siento. Has perdido este juego y " + nombre_ahorcado + " murió en la horca. Tal vez quieras intentarlo nuevamente y salvar su vida."

function errores_dibujar(){
    if (cantidad_errores === 1) {
        fallo1();
    } else if (cantidad_errores === 2) {
        fallo2();
    } else if (cantidad_errores === 3) {
        fallo3();
    } else if (cantidad_errores === 4) {
        fallo4();
    } else if (cantidad_errores === 5) {
        fallo5();
    } else if (cantidad_errores === 6) {
        fallo6();
    } else if (cantidad_errores === 7) {
        fallo7();
    } else if (cantidad_errores === 8) {
        fallo8();
    } else if (cantidad_errores === 9) {
        fallo9();
    } else if (cantidad_errores === 10) {
        fallo10();
        mensaje_superior.textContent = msj_sup_fin;
        mensaje_inferior.textContent = msj_inf_fin;
    }
};


