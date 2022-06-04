var palabra_ingresar = document.querySelector(".palabra_nueva");
var guardar_palabra = document.querySelector(".boton_1");
var numeros = ["1","2","3","4","5","6","7","8","9","0"];
var acentos = ["´","Á","É","Í","Ó","Ú"];
/*var palabras_agregadas = [];*/

function agregar() {
    var palabra_solicitada = palabra_ingresar.value;
    var palabra_comparar = palabra_solicitada.toUpperCase();
    var verificar_letras = verificar_caracteres(palabra_comparar);
    var confirmar_nueva = confirmar(palabra_comparar);
    var caracteres = palabra_solicitada.length;
    if(confirmar_nueva && caracteres>=2 && caracteres <= 8 && verificar_letras) {
        palabras_originales.push(palabra_comparar);
        palabras2_originales.push(palabra_comparar);
        palabras_agregadas.push(palabra_comparar);
        alert("Palabra añadida");
    } else if (!sin_numeros) {
        alert("No admite números.");
    } else if (!sin_acentos){
        alert("No admite acentos.");
    } else if (!sin_caractEsp) {
        alert("No admite caracteres especiales.");
    } else if (!confirmar_nueva) {
        alert("La palabra ingresada ya estaba incluída en el juego");
    } else if (caracteres > 8) {
        alert ("Su palabra excede el límite de caracteres");
    }
    localStorage.setItem("palabras_agregadas",JSON.stringify(palabras_agregadas));
    palabra_ingresar.value = "";
    window.location.href = "nombre.html";
}

function confirmar(word) {
    for (var i = 0; i<palabras_originales.length; i++){
        if (word === palabras_originales[i]){
            confirmar_nueva = false;
            break;
        } else {
            confirmar_nueva = true;
        };
    };

    return confirmar_nueva;
};

function verificar_caracteres(word){
    var sin_acentos = verificar_acentos(word);
    var sin_numeros = verificar_numeros(word);
    var sin_caractEsp = verificar_caractEsp(word);
    if(sin_acentos && sin_numeros && sin_caractEsp){
        verificar_letras = true;
    } else {
        verificar_letras = false;
    };

    return verificar_letras;
}

function verificar_acentos(word) {
    for(var i = 0; i<word.length; i++) {
        for(var a = 0; a<acentos.length; a++){
            if(word[i] === acentos[a]) {
                sin_acentos = false;
                break;
            } else {
                sin_acentos = true;
            }
        }
    }
    return sin_acentos;
}; 

function verificar_numeros(word) {
    for(var i = 0; i<word.length; i++) {
        for(var a = 0; a<numeros.length; a++){
            if(word[i] === numeros[a]) {
                sin_numeros = false;
                break;
            } else {
                sin_numeros = true;
            }
        }
    }
    return sin_numeros;
}; 

function verificar_caractEsp(word) {
    for(var i = 0; i<word.length; i++) {
            if(letras.includes(word[i])) {
                sin_caractEsp = true;
            } else {
                sin_caractEsp = false;
                break;
            }
        }
    return sin_caractEsp;
}; 

guardar_palabra.onclick = agregar;