//Diferencia entre FUNCIONES y METODOS

const num1 = 20;
const num2 = "20";

console.log(num2)
console.log(parseInt(num2)) // Esto es una función. En este caso lo que se le pasa a los parentesis (es argumento)

console.log(num1)
console.log(num2.toString() ) // Esto es un metodo


// Ambas pueden ser reutilizables, cumplen sus objetivos, pero si esta la funcion y luego parentesis; es funcion. En cambio, si es variable, luego se declara y luego los parentesis; en un metodo

// Mientras que en la funcion lo que se les pasa a los () (es parametro)
function firtname() {
    console.log('Suma')
}
firtname();