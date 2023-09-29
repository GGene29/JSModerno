// Variables

//Acumulación de cursos
const carrito = document.querySelector('#carrito');

//cuerpo a llenar de cursos
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

//Vaciar carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

//lista de los cursos 
const listaCursos = document.querySelector('#lista-cursos');

//carrito de Compras
let articulosCarritos = []

//


//Carga los eventos del carrito de compras

cargarEventListeners();

function cargarEventListeners(){
    //Cuando presionas "Agregar al Carrito" se agrega un curso
    listaCursos.addEventListener('click', agregarCurso);
}



//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){
        console.log('Agregando al Carrito');
        const cursoSeleccionado = e.target.parentElement.parentElement
        console.log(e.target.parentElement.parentElement)
        
        leerDatosCurso(cursoSeleccionado);
        
    }
}

//Leer y extraer contenido

function leerDatosCurso(curso) {

    //Crear objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Agregando elementos al arreglo carrito
    articulosCarritos = [...articulosCarritos, infoCurso];
    
    console.log(infoCurso);
    console.log(articulosCarritos);

    carritoHTML();
}


//Muestra carrito de compras
function carritoHTML() {

    //Limpiar HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarritos.forEach( curso => {
        const {imagen, titulo, precio, cantidad ,id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>

            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X
            </td>

        `;

        //html del carrito en el tbody
        contenedorCarrito.appendChild(row);
        // //Vaciar Carrito
        // vaciarCarritoBtn.addEventListener('click', () => {
        //     console.log('Eliminando todo el contenido del carrito');
        //     articulosCarritos.remove();
        // });
    });
    

}

//Elimina cursos de tbody (carrito)
function limpiarHTML() {
    //Esta se considera una forma lenta
    // contenedorCarrito.innerHTML = '';

    //Forma ágil
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    };
}
 
//empresa