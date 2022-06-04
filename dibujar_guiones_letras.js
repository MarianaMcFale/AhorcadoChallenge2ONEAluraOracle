function dibujar_guiones() {
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.beginPath();
    
    var tamanho_guion = 800 / palabra_jugar.length;
    
    for(var i = 0 ;i<palabra_jugar.length; i++){
        pincel.moveTo(200 + i * tamanho_guion,400);
        pincel.lineTo(250 + i * tamanho_guion,400);
    };

    pincel.stroke();
    pincel.closePath();

};


function dibujar_letra_acertada(pos){
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

    pincel.lineWidth = 0;
    pincel.fillStyle = "#17A589";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.font = "bold 55px Arial";

    var separar_letras = 800 / palabra_jugar.length;

    pincel.fillText(palabra_jugar[pos],205 + (separar_letras * pos),390);

}


function dibujar_letras_erradas(word){
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

    pincel.fillStyle = "#EC7063";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.font = "bold 45px Arial";
    pincel.lineWidth = 0;

    var separar = 80;

    pincel.fillText(word,130+ (separar * letras_erradas.length),450);

}

function descubrir_palabra(palabra){
    for (var i = 0; i<palabra.length; i++){
        
        dibujar_letra_acertada(i)
    }
};