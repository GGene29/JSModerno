const carrito = [
    {nombre: 'Monitor de 27 pulgadas',precios: 500},
    {nombre: 'Televisión',precios: 100},
    {nombre: 'Tablet',precios: 100},
    {nombre: 'Audifonos',precios: 300},
    {nombre: 'Teclado',precios: 400},
    {nombre: 'Celular',precios: 700},

];

// Caso . Every
const resultado = carrito.every ( producto => producto.precio < 500);
//Este caso, trae resultado solo si todos cumplen la condición
console.log(resultado0);

//Caso .some

const resultadoTwo = carrito.some( producto => producto.precio > 500);
// este revisa que al menos uno cumpla la decición 
console.log(resultadoTwo);