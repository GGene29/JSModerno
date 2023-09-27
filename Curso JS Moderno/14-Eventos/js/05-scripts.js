//Eventos con el scroll

//Los cuales se ejecutan acorde a la cantidad de scroll o la posición del mismo

//por medio de window, tenemos acceso a todo el documento
window.addEventListener('scroll', () => {
    // scrollX horizontal
    // scrollY vertical
    // console.log('scrolling');

    const scrollEnPixeles = window.scrollY; //Busqueda vertical
    // console.log(scrollEnPixeles);

    const premiuntarget = document.querySelector('.premium');
    // console.log(premiuntarget);
    const premium = premiuntarget.getBoundingClientRect();
    console.log(premium); //Se podría trabajar con el top o el botton


    if (premium.top < 281){
        console.log('Dentro del rango visible')
        premiuntarget.childNodes[1].style='color:gray;'
        
        console.log(premiuntarget.childNodes[1])
    }else{
        console.log('Fuera de la visibilidad')
        premiuntarget.childNodes[1].style='color:red;'
    }
    //new residencia, fusionado con cambios
})
