
const carrito = [];

console.log(carrito)

const computadora = {
    nombre: 'Computadora',
    ram : 4 ,
    procesador : 'intel core 5 de 6ta G',
    marca: 'Hp'
}

const telefono = {
    nombre : 'Telefono',
    ram : 2,
    marca: 'RedmiA',
}
const electrodomestico = {
    nombre: 'Nevera',
    marca: 'Gplus',
    motor: 5,
}
//Imperativa: trabajamos sobre nuestra variable
//Sin modificar el objeto inicial.

//Declarativas: Explica la logica sin describir tanto el flujo de control. No modifica el objeto original

let resultado;

resultado = [...carrito, telefono, computadora]
;

console.log('Lista de Compras: ');
console.log(resultado);
console.table(resultado);

resultado = [electrodomestico, ...resultado];
console.log(resultado);
console.table(resultado);

// Acorde al orden en que se necesite se pasan los valores



