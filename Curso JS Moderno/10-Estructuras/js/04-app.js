//Operadores mayor o menor que con IF, ELSE IF, ELSE.

const dinero = 200;
const totalPagar = 500;
const tarjeta = true;

let vuelto;
let falta;

// TUTORIAL 
console.log(`Resultados tutorial`)
if (dinero >= totalPagar) {
    console.log(`Si podemos pagar`);
} else if (tarjeta) {
    console.log(`si puedo pagar porque tengo la tarjeta`)
}else {
    console.log('Fondos Insuficientes');
}


//Dato !!

// Siempre se ejecutara la primera condición que se cumpla




//Mi manera de Hacerlo
console.log(`resultados genesis`)
if (dinero > totalPagar) {
    console.log(`Puedo cubrir el monto`);
    if (tarjeta) {
        vuelto = dinero - totalPagar;
        console.log(`Su vuelto es de ${vuelto}`);
    } else if (tarjeta == false){
        console.log(`Disculpe, no puedo pagar porque he dejado mi tarjeta`);
    }
} else {
    falta = totalPagar - dinero;
    console.log(`El total a pagar es de ${totalPagar}, le hacen falta ${falta}bs`);
}
