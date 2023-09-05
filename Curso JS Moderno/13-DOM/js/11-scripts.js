//Ejemplos avanzados 

//apertura de barra inferior desde un boton

//selección del botón
const botonInferior = document.querySelector('.btn-flotante');
console.log(botonInferior)

//Seleccion del footer
const aperFooter = document.getElementById('footer');
console.log(aperFooter)

//Indicarle al boton que espere una interaccion

/*ejemplo con funcion anonima
botonInferior.addEventListener('click', () =>{
    console.log('apretaste el boton');
} )
*/

//ejemplo llamando a una funcion
botonInferior.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    console.log('apretaste el boton');
    if (aperFooter.classList.contains('activo')) //si tiene o no una clase
    {
        aperFooter.classList.remove('activo');
        this.classList.remove('activo');//this relaciona a su origen
        this.textContent = 'Idioma y Moneda';
    }else{
        aperFooter.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    }
    console.log(aperFooter);
};
