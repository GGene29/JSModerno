//ARRAY METHODOS
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//REDUCE => funcion reductura
//Toma grandes cantidades de datos y las reune para dar un resultado final

//ejemplo foreach

let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);
//Toda todos los precios y arroja un total

// ====================

// Con Reduce

let resultado = carrito.reduce( (total, actual) => total + actual.precio, 0);
console.log(resultado);