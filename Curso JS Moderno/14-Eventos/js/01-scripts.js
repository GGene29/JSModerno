//EVENTOS EN JS

//La sintaxis es de addEventListener('')
console.log('primero')

document.addEventListener('DOMContentLoaded', () => {
    console.log('tercero');
    console.log('DOMContentLoaded sirve para verificar la carga de todo el documento');
});

console.log('segundo');

