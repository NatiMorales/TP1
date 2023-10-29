let numero = parseInt(prompt("Ingrese un número: "));

if((numero % 2) == 0 || (numero % 3) == 0 || (numero % 5) == 0 || (numero % 7) == 0 ){
    document.write(`El ${numero} es divisible por: <br>`);
    if((numero % 2) == 0){
        document.write("<li>2. </li>");
    } 
    if((numero % 3) == 0){
        document.write("<li>3. </li>");
    } 
    if((numero % 5) == 0){
        document.write("<li>5. </li>");
    } 
    if((numero % 7) == 0){
        document.write("<li>7. </li>");
    }
} else{
    document.write(`El ${numero} no es divisible por 2, 3, 5 o 7.`);
}