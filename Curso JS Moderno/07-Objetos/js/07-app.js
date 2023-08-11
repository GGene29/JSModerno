

const ramas = {
    prueba: "primer merge",
    hoja: "su color es verde",
    cantidad: 5,
    vegetal : false,
};
console.log(ramas)
// Se sabe que las variables constantes no pueden ser sobre escritas, pero los objetos si

ramas.prueba = "ARBOL";

console.log(`valor nuevo de prueba = ${ramas.prueba}`);

//Al estar en un objeto, se pueden reescribir, eliminar y añadir

