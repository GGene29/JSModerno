//ONJETOS DENTRO DE OTROS

const persona = {
    nombre: 'Roque',
    apellido: 'Lopez',
    edad: 22,
    estatura: 1.72,
    información : {
        hermano: "Samuel",
        mama: "Anahis",
        papa: "Elkin",
        trabajos: {
            administrador: "Empresarial",
            enfermera: "Social",
            estudiante : {
                escolar: 5,
            },
            labor : {
                name : "Emilio",
                profesion: "programador",
            },
        },
    },
};

//Para acceder a valores de objetos dentro de otros, se continua usando los puntos

console.log(persona.información.mama);

console.log(persona.información.hermano);

console.log(persona.estatura);

console.log(`Los objetos pueden ser tan complejos como necesites`)
console.log(persona.información.trabajos.labor.profesion)
console.log(persona)

