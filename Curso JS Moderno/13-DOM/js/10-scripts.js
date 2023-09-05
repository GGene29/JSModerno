
// Generar HTML desde el JavaScript

//create Element te permite crear elementos ('aca-va-la-etiqueta-a-ultilizar')
const enlace = document.createElement('A');
//Acá se le agrega el texto
enlace.textContent = 'Nuevo Enlace';
//Se le agrega el enlace
enlace.href = '/nuevo-enlace';
//Se le pueden agregar todos los atributos que sean necesarios.

//atributos
// enlace.setAttribute('data-enlace');

//clases
enlace.classList.add('container');

//eventos
enlace.onclick = miFuncion;



// console.log(enlace);
//a este punto, lo hemos creado, pero aún no existe en el DOM





//Se debe definir donde se va a mostrar (seleccionamos donde se va a ubicar)

const navega = document.querySelector('.navegacion');
//pasamos nuestra creacion
// navega.appendChild(enlace); //appendChild agrega al final

//para mas control se usa insertBefore
navega.insertBefore(enlace, navega.children[1]);
//esta etiqueta requiere elemento y posicion.

function miFuncion() {
    alert('Aqui me encuentro');
}



//Crear un card de forma dinamica

const targetNew = document.createElement('p');
targetNew.textContent='CONCIERTO';
targetNew.classList.add('categoria', 'concierto');

const targetNew1 = document.createElement('p');
targetNew1.textContent = 'ROCK'
targetNew1.classList.add('titulo')
// console.log(targetNew1);

const targetNew2 = document.createElement('p');
targetNew2.textContent='500 por persona';
targetNew2.classList.add('precio');


//Se debe respetar el orden
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(targetNew)
info.appendChild(targetNew1)
info.appendChild(targetNew2)
// console.log(info);

//En este caso, debemos de ir verificando de tener todos los elementos necesario para crear desde el js

//creando imagen faltante

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto-alternativo';

//creamos el card
const card = document.createElement('div');
card.classList.add('card');

//asignamos imagen
card.appendChild(imagen);

//asignamos informacion 
card.appendChild(info);


console.log(card);

//Una vez este completo,buscamos donde ubicarlo

const contenedor = document.querySelector('.hacer .contenedor-cards')
// contenedor.appendChild(card);
console.log(contenedor)
contenedor.appendChild(card);
console.log('Elemento añadido');
