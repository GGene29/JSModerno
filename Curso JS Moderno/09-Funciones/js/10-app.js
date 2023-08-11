// ARROW FUNCTIONS

const aprendiendo = function () {
    console.log(`Aprendiendo JavaScript (normal)`);
}
//Para convertirlo en function o funcion flecha 
const aprendiendo2 = () => {
    console.log(`Aprendiendo JavaScript (modo 1)`);
}

//Con este metodo mucho se simplifica, ya las llaves no serán necesarias

const aprendiendo3 = () => console.log(`Aprendiendo JavaScript (modo 2)`);

// Otro dato, si el ARROW FUNCTION es de una sola linea
// no es necesario el console.log
// ya que funciona como un return

const aprendiendo4 = () => `Aprendiendo JavaScript (solo una linea)`;


//Vistas
aprendiendo();

aprendiendo2();

aprendiendo3();

aprendiendo4();