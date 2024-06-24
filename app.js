
alert("¡¡¡Empieza el juego!!!");
alert("Adivina el numero en 3 intentos")

// # variables:
let NumeroCorrecto = Math.floor(Math.random()*10 + 1 );
//console.log(NumeroCorrecto)
let NumeroDeUsuario = 0;
let Intentos = 1;

while(NumeroDeUsuario != NumeroCorrecto && Intentos<=3){
    // # Intentos:
    Intentos++;

    let NumeroDeUsuario = parseInt(prompt("Ingrese un numero entre 1 a 10:"));

    // # imprime la variable en consola:
    //console.log(NumeroDeUsuario);

    // # bloque de comparación:
    if(NumeroCorrecto == NumeroDeUsuario){
        alert("Felicidades! Has ganado! despues de: " +Intentos+ " Intentos. El numero correcto si es: "+ NumeroDeUsuario);
        break;
    }
    else{
        if(NumeroDeUsuario>NumeroCorrecto){
            alert("El numero que ingresaste es mayor que el correcto. Intenta de nuevo!");
        }
        else{
            alert("El numero que ingresaste es menor que el correcto. Intenta de nuevo!");
        }
        //alert("Lo siento, el numero correcto es " + NumeroCorrecto);
    }
    

}