const enlace = document.createElement('A');

enlace.textContent = 'Nuevo Enlace';

enlace.href = '/nuevo-enlace';

console.log(enlace);

const navegacion = document.querySelector('.navegacion');
//Lo posiciona al final
navegacion.appendChild('enlace');
//Posicion y lugares disponibles
console.log(navegacion.children)

