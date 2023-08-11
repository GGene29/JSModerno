//Operadores mayor o menor que

const dinero = 500;
const totalPagar = 500;
let vuelto;
let falta;
if (dinero >= totalPagar) {
    vuelto = dinero - totalPagar;
    console.log(`Su vuelto es de ${vuelto}`); 
} else {
    falta = totalPagar - dinero;
    console.log(`El total a pagar es de ${totalPagar}, le hacen falta ${falta}bs`);
}

