var imput_nombre = document.querySelector("#nombre_ahorcado");
var btn_nombrar = document.querySelector("#btn_nombrar");
var btn_saltear = document.querySelector("#btn_omitir_nombre");
var nombre_ahorcado = "";

function emprolijar_nombre () {
    var nombre_elegido = imput_nombre.value;
    var nombre_minuscula = nombre_elegido.toLowerCase();
    var nombre_primer_letra = nombre_minuscula.charAt(0).toUpperCase();
    var resto_nombre = nombre_minuscula.slice(1);
    nombre_ahorcado = nombre_primer_letra + resto_nombre;

    return nombre_ahorcado;
}

function almacenar_nombre() {
    nombre_ahorcado = emprolijar_nombre();
    if (nombre_ahorcado.length === 0){
        nombre_ahorcado = "Horcaditus"
    localStorage.setItem("nombre_ahorcado",nombre_ahorcado);
    }else if(nombre_ahorcado.length != 0){
        localStorage.setItem("nombre_ahorcado",nombre_ahorcado);
    }else{
        alert("No se ha elegido ningún nombre");
        localStorage.setItem("nombre_ahorcado",nombre_ahorcado);
    };
    almacenar_session();
    window.location.href="ahorcado.html";

}

function saltear_nombre(){
    nombre_ahorcado = "Horcaditus";
    localStorage.setItem("nombre_ahorcado",nombre_ahorcado);
    almacenar_session();
    window.location.href="ahorcado.html"
    
}

function almacenar_session(){
    var palabras_nuevas = JSON.parse(localStorage.getItem("palabras_agregadas"));
    var palabras_originales = JSON.parse(localStorage.getItem("palabras_originales"));
    var palabras2_originales = JSON.parse(localStorage.getItem("palabras2_originales"));
    var nombre_ahorcado = localStorage.getItem("nombre_ahorcado");

    sessionStorage.setItem("palabras_agregadas",JSON.stringify(palabras_nuevas));
    sessionStorage.setItem("palabras_originales",JSON.stringify(palabras_originales));
    sessionStorage.setItem("palabras2_originales",JSON.stringify(palabras2_originales));
    sessionStorage.setItem("nombre_ahorcado",nombre_ahorcado);

    localStorage.removeItem("palabras_agregadas");
    localStorage.removeItem("palabras_originales");
    localStorage.removeItem("palabras2_originales");
    localStorage.removeItem("nombre_ahorcado");
}

btn_nombrar.onclick = almacenar_nombre;
btn_saltear.onclick = saltear_nombre;
