//Uso del .Concat --> Sirve para la concanetación de diferentes arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
console.log(meses)

const meses2 = ['Agosto' , 'Septiembre'];
console.log(meses2);

const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];
console.log(meses3);


//Con el uso de .concat podemos pasar varios arrays
const años = [meses.concat(meses2,meses3)];

console.log(años);

// spred operador
//Para este es necesario formar un array, ya que el realiza copias
const resultado2 = [...meses, ...meses2, ...meses3];

console.log(resultado2)

//Esto aplica mientras sea un array, para un string no será necesario, ya que transgiversara la información

const resultado3 = [...meses, ...meses2, ..."Octubre"];

console.log(resultado3);

//Si queremos sumar un string, solo utilizamos la coma ( , )
const resultado4 = [...meses, ...meses2, ...meses3 , 'Todos los meses del año'];

console.log(resultado4);