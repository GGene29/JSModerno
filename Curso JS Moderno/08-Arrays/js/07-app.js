//Eliminar elementos de un arreglo 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

//Una variante para no agregar por medio de las posiciones.

//Hay dos metodos PUSH y UNSHIFT


//Agregar al final
meses.push('Mayo');
meses.push('Junio');
meses.unshift('Diciembre');

console.log(meses);

//Carrito de compra
// Los arrays pueden contener arreglos
const carrito = [];

console.log(carrito)

const computadora = {
    nombre: 'Computadora',
    ram : 4 ,
    procesador : 'intel core 5 de 6ta G',
    marca: 'Hp'
}
//Agregar al inicio
const telefono = {
    nombre: 'Telefono',
    ram : 2,
    marca: 'RedmiA',
    procesador: 'smak-dragons',

}

const comida = {
    nombre : 'Comida',
    ram : false,
    marca: 'Polar',
    procesador: false,
}
let carrito0 = [...carrito,computadora,telefono,comida];
console.log(carrito0);

let carrito1 = [...carrito0]
console.log(`No queremos comprar la comida que ocupa espacio del carrito de compras `)
// carrito1.push(computadora);
// carrito1.push(telefono);
// carrito1.push(comida); 
// console.table(carrito1)

console.log(`Vamos a eliminar el ultimo valor.`);

carrito1.pop();
console.table(carrito1)

let carrito2 = [...carrito0]

// carrito2.unshift(comida);
console.log('Vamos a eliminar el primer valor');
// console.table(carrito2);
carrito2.shift();
console.table(carrito2)

let carrito3 = [...carrito0];
console.log(`Vamos a eliminar el valor del medio`);
carrito3.splice(1, 1);
console.table(carrito3);


console.log(`Así iniciamos`)
console.table(carrito0)

// Dando uso al splice ( N , M );
// el primero se refiere a la posicion = N
// El segundo se refiere al parecer cantidad a eliminar