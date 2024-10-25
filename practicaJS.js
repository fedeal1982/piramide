/*Utilizar la palabra clave let para declarar una variable 
llamada carácter*/
const character = "#";
//Cambiar la cadena "Hola" para usar comillas simples
//const hola = "Hola";
/*Imprimir el valor de la variable caracter en la consola. 
Luego, hacer clic en el botón "Consola" 
para ver la consola de JavaScript*/
//console.log(character);
//Utilizar mayúsculas y minúsculas para declarar una nueva variable
//let segundoCaracter = "Prueba";
/*Agreguar un console.log() para ver cuál es el valor de la variable
segundoCaracter*/
//console.log(segundoCaracter);
/*Asignar la cadena "Prueba" a su variable secondCharacter debajo de su
declaración. Abrir la consola para ver cómo ha cambiado su registro*/
/*Utilice let para declarar una variable de recuento. Asígnale el número 8. Cuando
utilices un valor numérico, no se utilizan comillas*/
const count = 8;
//Declarar una variable llamada rows y asígnarle una matriz vacía
const rows = [];
/*Cambiar la declaración de las filas para que sea una matriz con las cadenas
“London", "New York" y "Mumbai"*/
/*Utilizar console.log y notación entre corchetes para imprimir el primer valor en
su matriz de filas*/
//console.log(rows[0]);
/*Actualizar el tercer elemento de la matriz de filas para que sea el número 10.
Luego imprimir la matriz de filas en su consola.*/
//rows[2] = 10;
//console.log(rows);
/*Por ahora, eliminar el primer registro de la consola y la asignación de
filas[rows.length - 1]. Dejar la declaración de registro de la segunda fila para
más adelante*/
//console.log(rows[rows.length -1]);
/*Utilizar .push() para agregar la cadena "Paris" al final de su matriz de filas.
Agregar este código antes de console.log para que se pueda ver el cambio que se
realizó en la matriz.*/
//rows.push("Paris");
//console.log(rows);
/*Crear una nueva variable llamada popped y asígnarle el resultado de rows.pop().
Luego, mostrar la nueva variable por consola.*/
//const popped = rows.pop();
//console.log(popped);
let inverted = false;
function padRow(rowNumber, rowCount){
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//const call = padRow("Fede");
//console.log(call);
for (let i = 1; i <= count; i++) {
    if(inverted){
    rows.unshift(padRow(i, count));
}else{
    rows.push(padRow(i, count));
}
  }  

/*function addTwoNumbers(a, b){
    return a + b;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);*/
/*if ("") {
    
}else if(5>10){
    console.log("5 is less than 10");
}else{
    console.log("This is the else block");
}*/
//let continueLoop = false;
//let done = 0;
/*while(rows.length < count){
    //done++;
    rows.push(padRow(rows.length + 1, count));
    /*if(done === count){
        continueLoop = false;
    }
 }*/
/*for(let i = count; i > 0; i--){
    rows.push(padRow(i, count));
}
/*const numbers = [1, 2, 3];
const shifted = numbers.shift();
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(shifted);
(numbers);*/
let resultado = ""; 
for(const row of rows){
    resultado = resultado + "\n" + row;
}   

console.log(resultado);