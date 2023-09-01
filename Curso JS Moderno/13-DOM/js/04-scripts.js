//Seleccion usan el QuerySelector 

// se puede usar en ids y en clases
// pero solo trae un resultado

//Seleccion por clases
const card = document.querySelector('.card');
console.log(card);


//Podemos tener selectores en especifico como en css
//Aplica acorde a lo que se necesite

const infoTarjet = document.querySelector('.premium .info');
//desde orden de padre a hijo
console.log(infoTarjet);

//cuando es más de una posición de utiliza el chil

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccion por Ids
const fromulario = document.querySelector('#formulario');
console.log(fromulario);

// y Tambien por las etiquetas 
let barra = document.querySelector('nav');
console.log(barra)
