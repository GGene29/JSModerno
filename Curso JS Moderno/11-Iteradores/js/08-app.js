// FOR IN
//Itera sobre Objetos
const pendientes = ['Tareas', 'Comer', 'Baño', 'Estudiar JavaScript'];

for (let actividades of pendientes) {
    console.log(actividades)
}

const auto = {
    modelo: 'corola',
    year : 2001,
    color: 'blue',
}

for (let propiedades in auto){
    console.log(`${auto[propiedades]}`);
}

// for (let [llave, valor] of Object.entries(automovil)) {
//     console.log(valor); 
//     console.log(llave);   
// }