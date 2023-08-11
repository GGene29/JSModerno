
const persona = {
    nombre: 'Roque',
    apellido: 'Lopez',
    edad: 22,
    estatura: 1.72
};

//acceder a valores y asignarlos a variables

console.log(persona.apellido);
console.log(persona);
lastname = persona.apellido;
console.log(lastname);


//OBJECT DESTRUCTURING

const { edad, estatura} = persona;

console.log(estatura)

console.log(edad)
// se crean las variables partiendo de as propiedades de los objetos.



