//Eventos en formularios

//Evento submit

const formulario = document.querySelector('#formulario');

//Una funcion fantasma o anonima
/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Se previene la accion que realiza el evento por defecto
    //Y luego se le pasan lo que queremos que haga
    console.log('Buscando la información');

    //Podemos ver la accion que ejecuta
    console.log(e.target.action);
});
*/

//Con una funcion declarada
formulario.addEventListener('submit', validandoImput);

function validandoImput(event){
    event.preventDefault(); //Se previene la accion que realiza el evento por defecto
    //Y luego se le pasan lo que queremos que haga
    console.log('Buscando la información');
    // console.log(event.target);
    //Podemos ver la accion que ejecuta
    console.log(event.target.action);
}