//JS ya cuenta con más de 4000 funciones
//En otros lenguajes se conocen como parte de las librerias estandar

//Ejemplo

alert('Funcion por defecto');


function persona() {
    let nombre = prompt('Cual es tu nombre');
    if (nombre.length === 0) {
        console.log('Campo vacío no sirve')
    } else {
        console.log(`Usted es el Dueño Sr(@) ${nombre}`)
    }
}

persona();