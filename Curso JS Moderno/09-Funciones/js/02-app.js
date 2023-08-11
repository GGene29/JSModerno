//Diferencias entre express y declaration

//esta es reconocida como una función, la cual puede ser utilizada antes y despues de su creacion
hola();
function hola() {
    
    console.log( 2 + 2);

}

//Esta JS puede leerla más como una variable, que una función, por ese no la procesa y no la muestra.
age();
const age = function() {
    console.log(4+2);
}
