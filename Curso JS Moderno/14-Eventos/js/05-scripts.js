//Eventos con el scrol 

//Los cuales se ejecutan acorde a la cantidad de scroll o la posición del mismo

//por medio de window, tenemos acceso a todo el documento
window.addEventListener('scroll', () => {
    // scrollX horizontal
    // scrollY vertical
    console.log('scrolling');

    const scrollEnPixeles = window.scrollY; //Busqueda vertical
    console.log(scrollEnPixeles)

    const premiuntarget = document.querySelector('.premium')

    const ubicacionpremiun = premiuntarget.getBoundingClientRect();

    // if (ubicacionpremiun >= 500){
    //     console.log('Dentro del rango visible')
    // }else{
    //     console.log('Fuera de la visibilidad')
    // }
    //new residencia, fusionado con cambios
})
