//Manipulación de los elementos

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Hay diferentes manera de acceder al texto

console.log(encabezado.innerText); // Texto no oculto
console.log(encabezado.textContent); //Todo el texto
console.log(encabezado.innerHTML); //El html

