//Switch
//para evaluar multiples condiciones

const metodoPago = 'divisas';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        console.log(`A pagado en ${metodoPago}`);
        break
    case 'divisas':
        pagar();
        console.log(`A pagado en ${metodoPago}`)
        break;
    default: 
        console.log(`No has escogido un metodo de pago aceptable`);
        break;
}

function pagar() {
    console.log('Pagando...')
}