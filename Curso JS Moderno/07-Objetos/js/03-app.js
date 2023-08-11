//AGREGAR Y ELIMINAR VALORES

const persona = {
    nombre: 'Roque',
    apellido: 'Lopez',
    edad: 22,
    estatura: 1.72
};

//Nuevas propiedades
console.log(persona)

persona.gustos = "Adoro programar";

console.log(persona)

//Eliminar 

delete persona.estatura;
console.log(persona)