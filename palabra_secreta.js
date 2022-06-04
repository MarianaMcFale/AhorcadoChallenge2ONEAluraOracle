
var palabras_nuevas = buscarStorage("palabras_agregadas");
var palabras_orig = buscarStorage("palabras_originales");
var palabras2_orig = buscarStorage("palabras2_originales");
var palabras = agregar_palabras_nuevas(palabras_orig);
var palabras2 = agregar_palabras_nuevas(palabras2_orig);
var intentos = 0;
var palabra_jugar = "";
var cantidad_letras = 0;
var guiones_letras = "";

function sortear_palabra(){
    guiones_letras = "";
    palabra_jugar = "";
    mensaje_superior.textContent = "";
    mensaje_inferior.textContent = "";
    var index = Math.floor(Math.random() * (palabras.length - 1));
    if (palabras.length == 1) {
        for (var i = 0; i < palabras2.length; i++){
            palabras.push(palabras2[i]);
        };
    };
    var palabra = palabras[index];

    remover_sorteada(index);
    contar_intentos();
    return palabra;
}

function remover_sorteada(index){
    palabras.splice(index,1);
    return palabras;
}

function contar_intentos () {
   intentos = intentos + 1;
   return intentos;
}

function obtener_palabra () {
    intentos = 0;
    cantidad_errores = 0;
    mostrar_letras = "";
    limpiar_canvas();
    palabra_jugar = sortear_palabra();
    cantidad_letras = contar_letras(palabra_jugar);
    for (var i = 0 ; i < cantidad_letras; i++) {
        guiones_letras = guiones_letras + "_";
    };
    dibujar_guiones()
    letras_correctas = "";
    letras_erradas = "";
    letras_pulsadas = "";
    letra_repetida = "";
}

function contar_letras (palabra) {
    var letras = palabra.length;
    return letras;
}

function agregar_palabras_nuevas(listado){
    if (palabras_nuevas.length > 0 ){
        for (var i = 0; i < palabras_nuevas.length; i++) {
             listado.push(palabras_nuevas[i]);
        };
    };
 return listado;
};

function buscarStorage(id){
    var resultado = [];
    if(JSON.parse(localStorage.getItem(id)) === null){
        resultado = JSON.parse(sessionStorage.getItem(id));
    }else{
        resultado = JSON.parse(localStorage.getItem(id));
    }
    return resultado;
};


