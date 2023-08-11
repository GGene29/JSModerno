//Metodos para arreglos.

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
//Javascrip contiene sus ArraysMethos

carroCompras.forEach( function(productos) {
    console.log(`Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`);
} );

console.log(' ')
console.log('Vista desde un metodo de javascript');
console.log('map');
//Hacen lo mismo, pero tienen diferencias

// MAP crea un arreglo nuevo, en cambio; forEach no.


carroCompras.map( function(productos) {
    console.log(`Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`);
} );

const carritos = carroCompras.map( function(productos) {
    return `Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`;
} );

console.log(carritos);

console.log('peos con mi repo')

