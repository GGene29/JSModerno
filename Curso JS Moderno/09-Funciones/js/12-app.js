
const carroCompras = [
    {nombre:'Harina', precio:29},
    {nombre:'Arroz', precio:31},
    {nombre:'Azucar', precio:26},
    {nombre:'Harina', precio:37},
    {nombre:'Pasta', precio:34},
    {nombre:'Cafe', precio: 200},
    {nombre:'Carne', precio: 80}

]


console.log('Vista desde un metodo de javascript');
console.log('forEch');

//Javascrip contiene sus ArraysMethos y se pueden combinar con los function

carroCompras.forEach( (productos) => {
    console.log(`Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`);
} );

console.log(' ')
console.log('Vista desde un metodo de javascript');
console.log('map (nuevo arreglo)');
//Hacen lo mismo, pero tienen diferencias

// MAP crea un arreglo nuevo, en cambio; forEach no.


// carroCompras.map( (productos) => {
//     console.log(`Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`);
// } );

const carritos = carroCompras.map( (productos) =>  `Su Producto ${productos.nombre} tiene un precio de ${productos.precio}` );

console.log(carritos);