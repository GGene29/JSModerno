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

//El filter es mucho más flexible. Permitiendo hacer varias operaciones en los arreglos

let resto;

resto = carrito.filter (objActual => objActual.precio >= 400);
//Esto es posible gracias a las iteraciones; filtrando a lo que necesitamos
console.log(' ')
resto = carrito.filter( producto => producto.precio < 500)
console.log(resto)

//Para obviar o traer solo cierto contenido
console.log('Eliminando un articulo')
resultado = carrito.filter (producto => producto.nombre !== 'Celular');
console.log(resultado);
console.log('Mostrando un articulo es especifico');
especifico = carrito.filter(articulo => articulo.nombre === 'Television');
console.log(especifico);
//Repasar







