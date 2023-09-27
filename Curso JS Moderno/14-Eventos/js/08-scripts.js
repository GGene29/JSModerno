// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
//En caso de crear contenido HTML
//Podemos asignar un evento a una función
parrafo2.onclick = parrafo2Newfunction

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
//nueva asignación
parrafo3.onclick = function() {
    parrafo3newFunction(1);
};

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

//Nueva funcion, sin parámetros

function parrafo2Newfunction() {
    console.log=('Me han presionado');
}

//Nueva función con parametros

function parrafo3newFunction(id){
    console.log('Desde la nueva función con nuevos parámetros', id);
}
