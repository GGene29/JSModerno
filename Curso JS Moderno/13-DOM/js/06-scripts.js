//Manipulación de los elementos

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Hay diferentes manera de acceder al texto

console.log(encabezado.innerText); // Texto no oculto
console.log(encabezado.textContent); //Todo el texto
console.log(encabezado.innerHTML); //El html

encabezado.innerText = ('Cambiando nuevos rumbos en JavaScript');
console.log(encabezado)

//En la manipulación del DOM se altera tanto el texto como las imágenes
const imagen = document.querySelector('.card img');
imagen.src = 'img/newyork2.jpg'; //se accede por el src, porque es una ruta

