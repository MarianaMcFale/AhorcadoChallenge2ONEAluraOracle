function almacenar_palabras_originales(){
    localStorage.setItem("palabras_originales",JSON.stringify(palabras_originales));
    localStorage.setItem("palabras2_originales",JSON.stringify(palabras2_originales));
};

function almacenar_palabras_nuevas(){
    localStorage.setItem("palabras_agregadas",JSON.stringify(palabras_agregadas));
}

function almacenar_listas(){
    almacenar_palabras_originales();
    almacenar_palabras_nuevas();
};

window.onload = almacenar_listas;