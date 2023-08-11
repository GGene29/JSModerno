//METODOS DE OBJETOS

//VAMOS A SELLARLO
"use strick";

const trabajo = {
    empleado:"obrero",
    empleado1 : "contratado",
};

Object.seal( trabajo );
//de esta menra podemos modificar lo ya creado, pero no agregar nada nuevo.
console.log(trabajo);

trabajo.empleado = "personal";

console.log(trabajo);

//AÑADIR Y ELIMINAR NO

trabajo.recursos = "obras";
delete trabajo.empleado1;

console.log(trabajo)
//Para saber si estatus de sellado o no

console.log(Object.isSealed(trabajo));