//Spread Operator

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

//A pesar de ser muy nuevo, ya se inicio a utilizar

//Vamos agregar un elemento al final de un arreglo

const meses2 = [...meses, 'Agosto'];
//De esta manera, no modificamos el arreglo original
console.log(meses2);

//Ejemplo de spread operator con objetos
const producto = {nombre : 'Disco Duro', precio: 300};
//sin comillas, para agregar un nuevo objeto, solo pasamos su nombre
const carrito2 = [...carrito, producto];
console.log(carrito2);
//Ya el orden del final, depende de como lo ordenes.