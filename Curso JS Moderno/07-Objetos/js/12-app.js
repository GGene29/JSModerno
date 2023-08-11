
//Object literal (Como son conocidos los objetos)
//Se suele usar mas
const obpp = {
    encargado: "Curso",
    becado1: 'Roque',
    becado2: 'Jesus',
    becado3: 'Luis',
}
console.log(obpp)


//Object Constructor
//Mas dinamico

// 
function Proyecto(encargado, becado1) {
    this.encargado = encargado;
    this.becado1 = becado1;
}
//Por medio del this, accedemos a los valores por medio del function y se manejan solo los que se necesiten 
Proyecto();
console.log(`Feliz Tarde`);

const alcaravan = new Proyecto('Roque Emilio', 'Wilmary');
console.log(alcaravan);



