const producto = 'Nueva practica';

//.repeat te permite repetir las cadenas la cantidad de numero de veces que se les indique 
const repetir = 'Hola'.repeat(5);
const texto = 'para trabajos remotos ';


console.log(repetir);
console.log(texto.repeat(5));
console.log(`Presentamos las ${producto} ${texto}`);

// Y ahora usaremos un SPLIT, con el fin de dividir un string

const actividad = 'Estoy aprendiendo JS';
console.log(actividad);
console.log(actividad.split(" "));

const hobbies = 'Nadar, Pescar, Leer';
console.log(hobbies.split(','));
//Separa acorde lo pasado en el split ()
