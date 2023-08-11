//forEach

//JavaScript tiene sus propios iteradores y metodos

//forEach se ejecuta al menos una vez por la cantidad de elementos que tenga el arreglo

// const pendientes = ['Tareas', 'Comer', 'Baño', 'Estudiar JavaScript'];

// pendientes.forEach (  (cadaValor, espaciodeIndice) => {
//     console.log(cadaValor + ' '+ espaciodeIndice) 
// })

const escuela = [
    {alumno: 'Jesus', materia: 'Sociales', Presente: true},
    {alumno: 'Juan', materia: 'Sociales', Presente:false},
    {alumno: 'Raul', materia: 'Lengua', Presente: true},
    {alumno: 'Santiago', materia: 'Ingles', Presente: true},
    {alumno: 'Luis', materia: 'Ingles', Presente:false},
    {alumno: 'Victor', materia: 'Lengua', Presente: true},
    {alumno: 'Keyllin', materia: 'Ingles', Presente: false},
]
console.log('Estructura forEach');
escuela.forEach ( (estudiante, index) => {
    // console.log(estudiante); //Esto es para acceder a los valores de array (En este caso son objetos)
    console.log(index + ' ' + estudiante.alumno);  //Acceder a los valores de los objetos
})

//El map permite crear nuevos arreglos, en cambio; el foreach no se crea una ueva variable 

console.log('Estructura map ');
const resultados = escuela.map( (niños) => {
    console.log(niños.alumno + ' ' + niños.Presente + ' '+niños.materia);
})

