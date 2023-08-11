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
// COMPROBAR DE MANERA MANUAL SI EL VALOR EXISTE
meses.forEach( mes => {
    if (mes === 'Enero'){
        console.log('De manera manual')
        console.log('Existe ');
    }
});


//Utilizamos includes, el cual es para realizar busquedas o comparaciones
//Esto funciona con arreglos de un solo índice 
const resultado = meses.includes('Enero');
console.log('Recorriendo Arrays de un índice')
//Los resultados vienen tipo booleanos
console.log(resultado);

//Para arreglos con objetos
//Utilizamos SOME
console.log('Recorriendo Arrays con objetos')
const compra = carrito.some( (producto) => {
    return producto.nombre === 'Tablet'
});
//Some puede ser como una especie de funcion flecha
console.log('Existe el producto => ' + compra)

