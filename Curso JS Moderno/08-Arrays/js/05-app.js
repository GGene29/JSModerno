//AÑADIR ELEMENTOS AL INICIO O AL FINAL

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

//Una variante para no agregar por medio de las posiciones.

//Hay dos metodos PUSH y UNSHIFT


//Agregar al final
meses.push('Mayo');
meses.push('Junio');

console.log(meses);

//Carrito de compra
// Los arrays pueden contener arreglos
const carrito = [];

console.log(carrito)

const computadora = {
    ram : 4 ,
    procesador : 'intel core 5 de 6ta G',
    marca: 'Hp'
}
//Agregar al inicio
const telefono = {
    ram : 2,
    marca: 'RedmiA',

}

carrito.push('Lista de cosas: ');
carrito.push(computadora);

console.log(carrito)

carrito.unshift(telefono);
console.log(carrito);
console.table(carrito);