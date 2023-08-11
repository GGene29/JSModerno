// FOR OFF
//Itera sobre 
const pendientes = ['Tareas', 'Comer', 'Baño', 'Estudiar JavaScript'];

// pendientes.forEach (  (cadaValor, espaciodeIndice) => {
//     console.log(cadaValor + ' '+ espaciodeIndice) 
// })

const escuela = [
    {Alumno: 'Jesus', Materia: 'Sociales', Presente: true},
    {Alumno: 'Juan', Materia: 'Sociales', Presente:false},
    {Alumno: 'Raul', Materia: 'Lengua', Presente: true},
    {Alumno: 'Santiago', Materia: 'Ingles', Presente: true},
    {Alumno: 'Luis', Materia: 'Ingles', Presente:false},
    {Alumno: 'Victor', Materia: 'Lengua', Presente: true},
    {Alumno: 'Keyllin', Materia: 'Ingles', Presente: false},
]

// for off = estructura 

//for (let valorVariable of nombreArreglo) {...}

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let ninos of escuela) {
    console.log(ninos)
    // tambien se puede acceder a los valores
    console.log('Accediendo a valor' + ' ' + ninos.Alumno + ' ' + ninos.Materia)

}