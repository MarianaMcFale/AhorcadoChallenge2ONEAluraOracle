/*var display_letras = document.querySelector("#letras_erradas");*/
var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letras_erradas = "";
var letras_correctas = "";
var letra_repetida = "";
var cantidad_errores = 0;
var mostrar_letras = "";
var letras_pulsadas = "";

document.addEventListener('keydown', (event) => {
    if (cantidad_errores < 10 && descubrir_letra(letra) != palabra_jugar) {
    var tecla = event.key;
    var letra = tecla.toUpperCase();
    var validado = validar_letras(letra);
    var letra_acertada = letra_correcta(letra);
    if (validado){
        letra_repetida = validar_repetida(letra);
        if(!letra_acertada && !letra_repetida){
            letras_erradas = letras_erradas + letra;
            letras_pulsadas = letras_pulsadas + letra;
            cantidad_errores = cantidad_errores+1;
            dibujar_letras_erradas(letra);
        }else if(letra_acertada && !letra_repetida){
            letras_correctas = letras_correctas + letra;
            letras_pulsadas = letras_pulsadas + letra;
            descubrir_letra(letra);
            if(descubrir_letra(letra) === palabra_jugar && cantidad_errores != 10){
                mensaje_gana();
                palabra_descubierta =palabra_jugar;
            };
        }else if(letra_repetida){
            alert("La letra presionada ya ha sido utilizada");
        }
    } else {
       alert("La tecla pulsada no es una letra");
    };
   /* display_letras.textContent = letras_erradas;*/
    errores_dibujar();
    };
});


function validar_letras(letra){
    for (var i=0; i<letras.length; i++){
        if (letra === letras[i]){
             validado = true;
             break;
        } else {
            validado = false;
            };
    };
    return validado;
};

function letra_correcta (letra) {
    for (var i = 0 ; i<palabra_jugar.length ; i++) {
        if(letra === palabra_jugar[i]) {
            letra_acertada = true;
            break;
        } else {
            letra_acertada = false;
        }
    };
    return letra_acertada;
};

function validar_repetida (letra){
    for (var i = 0 ; i<letras_pulsadas.length ; i++) {
        if(letra === letras_pulsadas[i]){
            letra_repetida = true;
            break;
        } else {
            letra_repetida = false;
        }; 
    };
    return letra_repetida;
};