/*
Ejercicio 12
Escribe un programa que pida una frase y escriba las vocales que aparecen.
*/

let frase = prompt("Ingrese una frase: ");

for(let letra = 0; letra < frase.length; letra++){
    if(frase.charAt(letra) == "a" || frase.charAt(letra) == "e" || frase.charAt(letra) == "i"
    || frase.charAt(letra) == "o" || frase.charAt(letra) == "u"){
        document.write(frase.charAt(letra));
    }
}