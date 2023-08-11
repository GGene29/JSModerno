// parametros default o por defecto


//Se pueden colocar valores por defecto para que no aparezca undefined
function comprobante(usuario = 'Edad', ages = 'Nombre') {
    console.log(`Hola ${usuario} ${ages}`)

}

comprobante('Jesus', 5);

comprobante('Pedro');

comprobante();

function prueba(usuario1) {
    console.log(`Bienvenido ${usuario1}`);
}

prueba();
prueba('Juan');

function prueba1(vacio = '') {
    console.log(`Holaa ${vacio}`);
}

prueba1('Perez');
prueba1();

