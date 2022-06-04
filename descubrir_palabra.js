function descubrir_letra(word){
    mostrar_letras = "";
    for(var i = 0; i < palabra_jugar.length; i++){
            if(letras_correctas.includes(palabra_jugar[i])){
                mostrar_letras = mostrar_letras + palabra_jugar[i];
                dibujar_letra_acertada(i);

            } 
    };
    return mostrar_letras; 
}; 
