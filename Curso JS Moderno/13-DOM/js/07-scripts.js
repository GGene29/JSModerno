// Alterar el CSS desde el DOM

console.log('continuamos')


/* Las propiedades de CSS de más de una palabra son
 "justify-Content" se separan por medio del guion
En JavaScript
La segunda palabra inicia con Mayuscula
"justifyContent" "backgroundColor" etc
*/


let cajota = document.querySelector('.contenedor-cards').children[1].children[1].children[2];

// .innerText = '$500 por PERSONAS';
cajota.innerText = '500$ POR PERSONA';
cajota.style.color = 'WHITE';
console.log(cajota.style.backgroundColor = "black");

//No es tan recomendable, ya que puede ser mucho cógigo.
//Es mejor solo colocar y quitar clases

/*
ClassList es como un arreglo

Si quiere agregar algo utilizas add

elemento.classlist.add('nueva-clase');

*/

//ClassName es como un string


