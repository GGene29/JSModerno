// Eventos con el mouse

//seleccion de navegacion
const nav = document.querySelectorAll('.navegacion a');
console.log(nav);

for ( let direcciones of nav ) {
    //primero un selector y luego un evento
    direcciones.addEventListener('mouseenter', () => {
        console.log('Pasaron sobre mi') //cursor sobre el elemento 'mouseenter'
        //Muy util con estilos sobre los elementos
        direcciones.style.color='red'; 
        direcciones.style.textDecorationLine
        ='underline';
    });

    //saliendo del elemento
    direcciones.addEventListener('mouseout', () => {
        console.log('Me fui XD'); //una vez se quita el cursor
        direcciones.style.color='white';
        direcciones.style.textDecorationLine
        ='';
        
    });

    //Seleccionando el elemento y lo soltamos
    direcciones.addEventListener('mouseup', () => {
        console.log('Apreton');//una vez seleccionen
        direcciones.style.color='yellow';
        direcciones.style.textDecorationLine
        ='underline';
        
    });
    
} 


//seleccion del log
const logotipo = document.querySelector('.logo');
//evento click
logotipo.addEventListener('click', () => {
    console.log('¡Me apretaron!'); //click al elemento
});

//seleccion del titulo central
const titulo = document.querySelector('h1');
//Evento muy similar al click
titulo.addEventListener('mousedown', () => {
    console.log('Entraron');
    titulo.style.color='blue';
});


//Seleccion del boton buscar
const botonRed = document.querySelector('.hacer h2');
console.log(botonRed);
// Evento doble click
botonRed.addEventListener('dblclick', ()=>{
    console.log('Realizando Busqueda');
    botonRed.style.color='gray';
    
});

/*
mousedown --> similar al click,  seleccion
click
dblclick --> Funciona como el doble click
mouseup --> cuendo se suelta la seleccion del mouse
mouseenter --> curso sobre el elemento
*/