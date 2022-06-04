var btn_desistir = document.querySelector(".btn_desistir");
var mensaje_superior = document.querySelector("#msj_sup");
var mensaje_inferior = document.querySelector("#msj_inf");
var desistir_cantidad = 0;
var palabra_descubierta = "";
var nombre_ahorcado = sessionStorage.getItem("nombre_ahorcado",nombre_ahorcado);

function desiste(){
    if (palabra_descubierta != palabra_jugar){
    palabra_descubierta = palabra_jugar;
    descubrir_palabra(palabra_jugar);
    cantidad_errores = 10;
    dibujar_ahorcado_completo();
    desistir_cantidad = desistir_cantidad + 1;
    if (desistir_cantidad === 1) {
    mensaje_superior.textContent = "¡Qué pena!";
    mensaje_inferior.textContent = nombre_ahorcado + " ha muerto... No has logrado salvarle la vida. Si desistes pierdes posibilidades de salvar su vida. No quieres eso ¿cierto?";
    } else if (desistir_cantidad === 2) {
    mensaje_superior.textContent = "¡Oh no!";
    mensaje_inferior.textContent = "¡Has desistido por segunda vez y " + nombre_ahorcado +" murió nuevamente!"; 
    } else if(desistir_cantidad === 3){
        mensaje_superior.textContent = "¡Vamos!";
        mensaje_inferior.textContent = "Ya no seas rencoroso con "+nombre_ahorcado+" deja de desistir y lucha por su vida.";         
    } else if(desistir_cantidad === 4){
        mensaje_superior.textContent = "¡Oye!";
        mensaje_inferior.textContent = "¿Acaso te divierte ver como ahorcan a "+nombre_ahorcado+" mientras tu desistes?";
    } else if (desistir_cantidad === 5){
        mensaje_superior.textContent = "¡Otra vez!";
        mensaje_inferior.textContent = "¿Está divertido desistir? ¿Acaso no tienes piedad por "+nombre_ahorcado+"?"; 
    } else if (desistir_cantidad === 6){
        mensaje_superior.textContent = "¡Ok.. ya no insistiré!";
        mensaje_inferior.textContent = "Solo te recuerdo que has ahorcado a "+nombre_ahorcado+" nuevamente. No sé si podrás vivir con eso, piénsalo."
    } else if (desistir_cantidad === 7){
        mensaje_superior.textContent = "¡Qué horror!";
        mensaje_inferior.textContent = "Otra vez has ahorcado ha "+nombre_ahorcado+"."
    } else if (desistir_cantidad > 7 && desistir_cantidad < 35){
    mensaje_superior.textContent = "¡"+desistir_cantidad+" veces!";
    mensaje_inferior.textContent = "R.I.P "+nombre_ahorcado+"."
    } else if (desistir_cantidad > 34 && desistir_cantidad < 100){
    mensaje_superior.textContent = "¡"+desistir_cantidad+" veces!";
    mensaje_inferior.textContent = "¡Cuántas veces más vas a ahorcarlo!... Descansa en paz "+nombre_ahorcado+"."
    } else if (desistir_cantidad >= 100){
    mensaje_superior.textContent = "¡"+desistir_cantidad+" veces!";
    mensaje_inferior.textContent = "Tu crueldad no tiene límites... pobre"+nombre_ahorcado+" ya ha muerto"+desistir_cantidad+" veces :("
    }
 };
};

btn_desistir.onclick = desiste;