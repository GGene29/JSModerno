//METODOS OBJETOS
"use strick";

const ramas = {
    prueba: "primer merge",
    hoja: "su color es verde",
    cantidad: 5,
    vegetal : false,
};

const casa = {
    sala: 'muebles',
    cuarto : {
        cosa: "Cama",
        cosa1: "almohada",
        cosa2: "sabana",
    }
};

console.log(ramas);
console.log(casa);

const resultado = Object.assign(ramas, casa);
console.log(resultado);

// Spred operador o Rest operador

// los tres puntos (...) es para hacer una copia y pasarla al nuevo objeto

const resultado2 = {...ramas,...casa}
