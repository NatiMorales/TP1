/*
Ejercicio 9
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));

if(numero1 > numero2){
    document.write(`El ${numero1} es el número más grande`);
} else if(numero1 < numero2) {
    document.write(`El ${numero2} es el número más grande`);
} else{
    document.write('Los números ingresados son iguales');
}