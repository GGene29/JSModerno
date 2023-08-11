// un input desde un "alert"
console.time('Veamos');

var pruebas = ['genesis', 'sumoza', 'calcurian', 'rodriguez', 'herrera'];

const nombre = prompt('Cual es tu nombre?');

console.error('Algo salio mal')

// "querySelector nos permite seleccionar contenido del html "
// Estar atenta a las comillas ``````
document.querySelector('.contenido').innerHTML =`${nombre} + Aprendiendo Js}`;

// Diferentes tipos de muestras en consola
console.warn('Eso no esta perminito');

console.table(pruebas);

console.log(nombre);
// console.clear

const obj = {
    apellido : 'Apellido',
    edad: '15'
};

console.log(obj);

console.timeEnd('Veamos');
// Evaluar la cantidad de tiempo que se puede tardar en dar respuesta

//Buenas practicas

console.log('Hola');

function hola() {
    console.log('Como estas')
}
