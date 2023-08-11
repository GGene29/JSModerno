//OPERADOR TERNARIO ?

const autenticado = true;
const puedePagar = false;

console.log(autenticado && puedePagar? 'Si esta autenticado y puede pagar' : 'No, no esta autenticado' )
console.log(autenticado || puedePagar? 'Si esta autenticado y puede pagar' : 'No, no esta autenticado' )
// Inicia con lo que evaluará "Variable"
// procede el operador ?
// vendria nuestra primera validación (algo como if) "_____ " :
// finaliza con lo que sucede si no se cumple la validación : "______" 


//========EJEMPLO=============

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 1000;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log(`Si podemos pagar`);
    if (efectivo > totalPagar) {
        console.log(`Si pagaste con efectivo`);
    } else {
        console.log('otro metodo de pago');
    }
}else {
    console.log(`Fondos Insuficientes`);
}
console.log('Ahora como podemos hacer esto con un operador ternario')


console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, pero no puede pagar': 'No puede pagar' )