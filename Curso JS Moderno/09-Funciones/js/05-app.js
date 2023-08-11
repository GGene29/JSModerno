
//Argumentos y Parametros en Funciones
let num3 = 4;
let num4 = 5;
let resto = num3 + num4;
console.log(resto)
//A pie


//Por medio de la función
//n y m => Parametros
function resultado(n,m) {
    let restos = n + m; 
    console.log(restos);
}

resultado(5,6);  //5 y 6 => argumentos

// de esta manera se reutiliza y no es necesario crear otra
resultado(1200,523); 


function saludar(nombres, apellidos) {
    console.log(`Hola ${nombres} ${apellidos}`);
}

saludar('Genesis' , 'Sumoza')

saludar();