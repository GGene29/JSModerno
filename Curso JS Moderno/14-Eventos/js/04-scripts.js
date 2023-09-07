//Eventos en formularios

//Evento submit

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Se previene la accion que realiza el evento por defecto
    //Y luego se le pasan lo que queremos que haga
    console.log('Buscando la información');

    //Podemos ver la accion que ejecuta
    console.log(e.target.action);


});
