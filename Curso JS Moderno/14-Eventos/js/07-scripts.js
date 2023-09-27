//Prevenir el Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    console.log(e.target);
    //Manera de ver a que elemento estamos seleccionando

    console.log(e.target.classList) //Manera de ver las clases

    if(e.target.classList.contains('titulo')){
        console.log('TITULO DEL CARD');
    };
    
    if(e.target.classList.contains('precio')){
        console.log('PRECIO DEL CAR')
    };

    
    if(e.target.classList.contains('categoria')){
        console.log('CATEGORIA DEL CAR')
    };

});