var btn_cambiar_victima = document.querySelector("#cambiar_victima");

function almacenar_local(){
    var palabras_nuevas = JSON.parse(sessionStorage.getItem("palabras_agregadas"));
    var palabras_originales = JSON.parse(sessionStorage.getItem("palabras_originales"));
    var palabras2_originales = JSON.parse(sessionStorage.getItem("palabras2_originales"));
    var nombre_ahorcado = localStorage.getItem("nombre_ahorcado");

    localStorage.setItem("palabras_agregadas",JSON.stringify(palabras_nuevas));
    localStorage.setItem("palabras_originales",JSON.stringify(palabras_originales));
    localStorage.setItem("palabras2_originales",JSON.stringify(palabras2_originales));
    localStorage.setItem("nombre_ahorcado",nombre_ahorcado);

    sessionStorage.removeItem("palabras_agregadas");
    sessionStorage.removeItem("palabras_originales");
    sessionStorage.removeItem("palabras2_originales");
    sessionStorage.removeItem("nombre_ahorcado");

    window.location.href="nombre.html"
}

btn_cambiar_victima.onclick = almacenar_local;