
// const persona = {
//     nombre: 'Roque',
//     apellido: 'Lopez',
//     edad: 22,
//     estatura: 1.72,
//     información : {
//         hermano: "Samuel",
//         mama: "Anahis",
//         papa: "Elkin",
//         trabajos: {
//             administrador: "Empresarial",
//             enfermera: "Social",
//             estudiante : {
//                 escolar: 5,
//             },
//             labor : {
//                 name : "Emilio",
//                 profesion: "programador",
//             },
//         },
//     },
//     novia: "Genesis",
// };


// const persona = {
//     nombre: 'Roque',
//     apellido: 'Lopez',
//     edad: 22,
//     estatura: 1.72,
//     información : {
//         familiares: [
//             {
//                 id: 1,
//                 nombre: "Elkin",
//                 apellido: "Garcia",
//                 trabajo: "Empresarial"
//             },
//             {
//                 id: 2,
//                 nombre: "",
//                 apellido: "Garcia",
//                 trabajo: "Empresarial"
//             }
//         ],
//         hermano: "Samuel",
//         mama: "Anahis",
//         papa: "Elkin",
//         trabajos: {
//             administrador: "Empresarial",
//             enfermera: "Social",
//             estudiante : {
//                 escolar: 5,
//             },
//             labor : {
//                 name : "Emilio",
//                 profesion: "programador",
//             },
//         },
//     },
//     novia: "Genesis",
// };

// console.log(persona.novia);

//APLICANDO OBJECT DESTRUCTURING A OBJETOS MUY GRANDES

const {nombre, novia, información : {trabajos : {labor: {profesion}}}} = persona

console.log(`${nombre}`);
console.log(`${novia}`);
console.log(`${nombre} y ${novia}`);
// console.log(trabajos);
console.log(profesion);

// Se declara el ultimo valor al que se va a acceder, esa es la variable.

