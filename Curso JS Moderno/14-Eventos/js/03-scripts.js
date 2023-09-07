//Eventos sobre los inpust y teclado

//seleccion del input
const busqueda = document.querySelector('.busqueda');
//seleccion del h1 sobre el input
const titulos = document.querySelector('.contenido-hero h1')

//Padre de los eventos | normalmente (aqui) va "(e)" o "(event)"
busqueda.addEventListener('input', (e) => {

    //Se ejecuta al escribir, copiar, pegar, cortar, st
    console.log('Epa, papa estas equivocado'); //realiza todas las siguientes "menos blur";
    titulos.textContent='Realizando busqueda del proximo destino';
    //La idea es acceder a lo que ocurre en el elemento
    console.log(e)
    //Sobre que elemento se trabaja
    console.log(e.type);
    //Sobre que elemento en especifico estamos
    console.log(e.target);
    //Para saber que se esta escribiendo
    console.log(e.target.value);
    
});

/*
//Presión de una tecla en el teclado
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo en el teclado... ');
    titulos.textContent='Realizando busqueda del proximo destino'
});

*/

/*
//Ejecuta después de la presión de una tecla
busqueda.addEventListener('keyup', () => {
    console.log('escribiendo en el teclado... ');
    titulos.textContent='Realizando busqueda del proximo destino'
});

*/

/*
//Despues de salir del input seleccionado, bueno para validaciones
busqueda.addEventListener('blur', () => {
    console.log('escribiendo en el teclado... ');
    titulos.textContent='Realizando busqueda del proximo destino'
});
*/

/*
//Cuando se realiza una copia
busqueda.addEventListener('copy', () => {
    console.log('Lo han copiado');
    titulos.textContent='Realizando busqueda del proximo destino'
});
*/

/*
//Cuando pegas algo
busqueda.addEventListener('paste', () => {
    console.log('Esta pegado');
    titulos.textContent='Realizando busqueda del proximo destino'
});
 */

/*
//Un evento para despues de realizar un recorte 
busqueda.addEventListener('cut', () => {
    console.log('Lo cortaron');
    titulos.textContent='Realizando busqueda del proximo destino'
});
*/
//Aqui eventos de teclado

