let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));
let numero3 = parseInt(prompt("Ingrese otro número: "));

if((numero1 > numero2) && (numero1 > numero3)){
    document.write(`El ${numero1} es el número más grande`);
} else if((numero1 < numero2) && (numero2 > numero3)){
    document.write(`El ${numero2} es el número más grande`);
} else if((numero1 < numero3) && (numero2 < numero3)){
    document.write(`El ${numero3} es el número más grande`);
} else {
    document.write("Los números ingresados son iguales");
}