 
//Pasamos a eliminar elementos por medio del DOM 
const navegacion = document.querySelector('a');
//Verificamos seleccionar el primer elemento
console.log(navegacion);
//Procedemos con la eliminación a si mismo
navegacion.remove();
//Realizamos la selección de un elemento padre
let barra = document.querySelector('.navegacion');
console.log(barra);

//Desde un elemento padre con (removeChild) pasamos su ubicación desde el padre y se removera.
barra.removeChild(barra.children[2]); 
