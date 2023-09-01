const carrito = [
    {nombre: 'Monitor de 27 pulgadas',precios: 500},
    {nombre: 'Televisión',precios: 100},
    {nombre: 'Tablet',precios: 100},
    {nombre: 'Audifonos',precios: 300},
    {nombre: 'Teclado',precios: 400},
    {nombre: 'Celular',precios: 700},

];

//Uso del .find en Arrays Methods
const resultadofind = carrito.find( producto2 => producto2.nombre === 'Televisión');
//Find solo trae el primer resultado que cumpla con su condición
console.log(resultadofind);

//Ejemplo con el foreach

let resultado = '';
carrito.forEach((producto , index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
});

console.log(resultado);

