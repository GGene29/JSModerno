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

//Para saber la posición de un elemento
//En el caso del forEach al pasarle un segundo parametro, lo identifica como un indice
console.log('Muestra un valor en especifico')
meses.forEach( (mes,i) => {
    if (mes === 'Mayo'){
        console.log(i+ ' ' + mes)}
});

console.log('Recorrido de todo el array');

meses.forEach( (mes,i) => {
    console.log(i+ ' ' + mes)}
);

//Estos metodos anteriores son manuales

//Uso de los Arrays Methods

//Para encontrar el indice de una manera mas directa
console.log('Ubicación de la posicicion por medio de FINDINDEX')
//Todos estos son arrows functions
const lugar = meses.findIndex( mes => mes === 'Junio');

console.log(lugar);

console.log('Al recorrer Arrays con objetos se debe usar el acceso por medio de puntos')

const articulo = carrito.findIndex( productos => productos.precio === 200);
console.log(articulo);


// const indice2 = carrito.findIndex( (producto) => {producto.precio === 100});
// console.log(indice2);

