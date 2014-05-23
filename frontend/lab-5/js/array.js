/* Arrays  los datos son debilmente tipados, esto permite 
agregar cualquier tipo de dato en una posicion del arreglo
*/

//var myArray = new Array();
var myArray = [1,3,5,7,9,11,13,15,17,19];
var toArray = ["hola", "mamita", "linda", "carajo"];
var tasks = ["hola", "mamita", "linda", "carajo"];

console.log(myArray[0]);
console.log(myArray);

myArray.push(1452); //agrega un elemanto al final delarray
console.log(myArray);

myArray.push("Hola Cidei"); //agrega un elemanto al final delarray
console.log(myArray);

myArray.pop(); //elimina el ultimo elemanto del delarray
console.log(myArray);

myArray.reverse(); //elimina el ultimo elemanto del delarray
console.log(myArray);

myArray.shift(); //elimina el primer elemanto del delarray
console.log(myArray);

myArray.sort(); //ordena el array de forma desendente
console.log(myArray);

toArray.sort(); //ordena por caracter de forma desendente
console.log(toArray);

console.log(tasks);
//tasks.splice(1,0,"Chamooo"); //ordena el array de forma desendente
//console.log(tasks);

tasks.splice(0,0,"Chamooo"); //ordena el array de forma desendente
console.log(tasks);

