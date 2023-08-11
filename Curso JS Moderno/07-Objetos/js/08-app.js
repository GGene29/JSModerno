"use strick";
//Metodos para objetos

const ramas = {
    prueba: "primer merge",
    hoja: "su color es verde",
    cantidad: 5,
    vegetal : false,
};

console.log(ramas);

ramas.color = 'verde';
ramas.otro = 'arbusto';
delete ramas.cantidad;
ramas.prueba = 'Cambiando mis ramas';

console.log(ramas);

//Cuando queremos que un objeto no se puedan alterar sus valores se usa strict

//Una vez habilitado, obligamos a trabajar de manera ordenada


//Evitar que el objeto sea modificado (FREEZE)

const producto = {
    precio: 1200,
    cantidad : 10,
    empaque : "Carton",
}

Object.freeze (producto);
console.log(producto);

producto.cantidad = 5;

//Para saber si esta congelado
console.log(Object.isFrozen(producto));

//De esta menra no me deja alterar las propiedades

