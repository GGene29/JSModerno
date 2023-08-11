//Iteradores 

//Serán para condiciones que se cumplan y se dejen de cumplir.

//Cuenta de tres partes  1 --> () ('DONDE INICIA')

// Parte 2 --> ; 'Condición'

//Parte 3 --> ; 'Incremento'

// y Por ultimo {} {'''
//          Lo que se va a ejecutar            
//                          '''}

//ESTRUCTURAS DE LOS ITERADORES.
//incrementa
// for (let i = 0 ; i < 11 ; i++ ) {
//     console.log(`Numero: ${i}`);
// }

//Se ejecuta hasta cumplir su condición.
//decrementa

// for (let i = 15; i >= 10 ; --i) {
//     console.log(`Numero: ${i}`);
// }

//Encuentra el numero par

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`Numero par: ${i}`)
//     }
// }
//Numeros impares
// for (let i = 0 ; i <= 20 ; i++) {
//     if (i % 2 !== 0) {
//         console.log(`Numeros impares ${i}`)
//     }
// } 

// ======== Optimización ======

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`Numero par: ${i}`);
//     } else {
//         console.log(`Numero impar: ${i}`);
//     }
// }

const carroCompras = [
    {nombre:'Harina', precio:29},
    {nombre:'Arroz', precio:31},
    {nombre:'Azucar', precio:26},
    {nombre:'Harina', precio:37},
    {nombre:'Pasta', precio:34},
    {nombre:'Cafe', precio: 200},
    {nombre:'Carne', precio: 80}

]  

console.log(`Se puede acceder por su posición`)
console.log(carroCompras[1]);

console.log(`Con el uso de length se puede saber la cantidad y luego proceder a recorrer`)

console.log(carroCompras.length);

for (i = 0; i < carroCompras.length; i++) {
    console.log(carroCompras[i].nombre, carroCompras[i].precio);
}

//De esta manera el carrito puede aumentar o disminuir y no habra poblemas durante su iteración.

