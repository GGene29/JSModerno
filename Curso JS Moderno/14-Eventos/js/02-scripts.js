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
    });

    //saliendo del elemento
    direcciones.addEventListener('mouseout', () => {
        console.log('Me fui XD'); //una vez se quita el cursor
        direcciones.style.color='white';
        
    });

} 


//seleccion del log
const logotipo = document.querySelector('.logo');
//evento click
logotipo.addEventListener('click', () => {
    console.log('¡Me apretaron!'); //click al elemento
});

//Aqui nuevo