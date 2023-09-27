//Event Bubbling 

//Se refiere al momento en el que se presiona un elemento y se inician otros eventos.

//El evento se propaga o se dispersa a elementos padres, hijos, similares, etc

//Todo esto es Event Bublling, eventos que se dispersan a los demás.
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

//Para detenerlos se usa stopPropagation
cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en card');
});

//A pesar que el preventDefault puede alterar la funcionalidad por defecto, no detiene la propagacion del evento (Event Bublling)
infoDiv.addEventListener('click', e => {
    e.preventDefault()
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en titulo');
});
