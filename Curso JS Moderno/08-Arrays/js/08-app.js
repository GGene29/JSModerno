//

const persona = {
    nombre: 'Roque',
    apellido: 'Lopez',
    edad: 22,
    estatura: 1.72
};

//acceder a valores y asignarlos a variables

// console.log(persona.apellido);

//No puedo acceder a los valores sin antes pasar por el objeto

console.log(persona.edad);
// lastname = persona.apellido;
// console.log(lastname);


//OBJECT DESTRUCTURING

const { edad, estatura} = persona;

console.log(estatura);

//Destructuring con Arrays

const numeros = [10, 20, 30, 40, 50,60]

//En el caso de los arrays no se puede llamar por nombre
//Los arrays trabajan por posición, entonces; podré asignarle el nombre que quiera a la variable segun su posición
console.log(numeros)

const [posicion0] = numeros;
console.log(posicion0);

const [,,,posicion3] = numeros;
console.log(posicion3);

const [diez, veinte, treinta,cuarenta, cincuenta, sesenta] = numeros;

console.log(veinte);
// console.log()
console.log(cincuenta);

//Otra forma, cuando quieres sacar solo algunos valores y que otros permanezcan detro de un array propio

const abecedario = ['A','B','C','D','E','F','G','H','I'];

const [a,b,c, ...d] = abecedario;
console.log(b);
console.log(d);
//De esa manera, se separan todos los restantes.

const [maria,juana,ana] = abecedario;
// console.log(media);
console.log(maria);
console.log(juana);
console.log(ana);
