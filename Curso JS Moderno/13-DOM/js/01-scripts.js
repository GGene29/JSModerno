console.log(`Pruebas de JavaScript`);
//Selección de todo lo que consiga referente a div con la clase logo
let newdiv = document.querySelectorAll('div.logo');
console.log(newdiv);
//seleccion de los div, esto trae solo el primero que consiga
let container = document.querySelector('div');
console.log(container);
//la clase del contenedor y la etiqueta que se esta seleccionando, solo trae la primera por ser Selector
var encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado)
//A este punto alteramos la clase de la selección previamente hecha
encabezado.className = 'primerheader';
console.log()
// console.log(encabezado.innerText);

console.log("Vamos con manipulación del DOM");
//Acorde a la selección previa, pasamos a usar los selectores. Este toma todo
console.log(encabezado.textContent + ' Previamente esto: ' +'var encabezado = document.querySelector(".contenido-hero h1");');
;

console.log('A partir del mismo podemos jugar con los diferentes que existen');
console.log(' ');
//Este selector solo muestra el contenido visible también para los usuarios, no muestra las cosas ocultas
console.log(encabezado.innerText);
console.log(' ');
console.log(' La diferencia con el próximo, es que trae todo el html');
//Selector para obtener el Html acorde a la selección previa.
console.log(encabezado.innerHTML);
console.log(' ');

console.log('La diferencia entre los mismos, es que innerText, si hay texto oculto; no lo va a mostrar, o en la sección de estilos tenga un hidden, lo respeta');
console.log('En cambio el textContent, oculto o no, el igual lo muestra (lo consigue)');
// Selección de un h2 con su respectiva clase y alteración del mismo por medio de un selector.
let manito = document.querySelector('h2.mi-viaje-plus').innerText = 'BIENVENIDO A MI PRUEBA DE CAMBIOS AL DOM';
console.log(manito);
// var newH2 = documenf[0].innerText;
// console.log(newH2);
//Con nuestro encabezado previo, y su clase agregada. Accedemos al contenido del mismo por medio de la clase y alteramos el contenido con un selector.
 let encabezados = document.querySelector('.primerheader').innerText = 'Cambiando Mundos';
console.log(encabezados);

console.log(" ");
console.log(" A partir de este momento podemos apreciar de que manera cambiar o modificar los elementos css, desde el DOM");
console.log(' ');

//Primera practica de la manipulación de estilos desde el JS. 
//Se realiza la selección de la etiqueta especifica a modificar, y le asignamos un id
let tarjeta = document.querySelectorAll('h2')[3].id='tarjeta-destino';
console.log(tarjeta);
//Manipulación de los estilos, igual no es recomendado.
let destino = document.getElementById('tarjeta-destino');
console.log(destino);
destino.style.color='blue';
destino.style.textTransform ='uppercase';
destino.hidden=true;




