// Variables

//Acumulación de cursos
const carrito = document.querySelector('#carrito');

//cuerpo a llenar de cursos
const constenedorCarrito = document.querySelector('#lista-carrito tbody');

//Vaciar carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

//lista de los cursos 
const listaCursos = document.querySelector('#lista-cursos');

//Carga los eventos del carrito de compras

cargarEventListeners();

function cargarEventListeners(){
    //Cuando presionas "Agregar al Carrito" se agrega un curso
    listaCursos.addEventListener('click', agregarCurso);
}



//Funciones
function agregarCurso(e) {
    e.preventDefault()
        if (e.target.classList.contains('agregar-carrito')){
            console.log('Agregando al Carrito');
        }
}

