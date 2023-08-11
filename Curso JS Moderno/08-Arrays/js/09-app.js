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


for (let i = 0; i < carroCompras.length ; i++) {
    console.log(carroCompras[i].precio);
}

for (let i = 0; i < carroCompras.length ; i++) {
    console.log(`Su Producto ${carroCompras[i].nombre} tiene un precio de ${carroCompras[i].precio}`)
}
console.log('');
console.log('Vista desde un metodo de javascript');
console.log('');
//Javascrip contiene sus ArraysMethos

carroCompras.forEach( function(productos) {
    console.log(`Su Producto ${productos.nombre} tiene un precio de ${productos.precio}`);
} );






