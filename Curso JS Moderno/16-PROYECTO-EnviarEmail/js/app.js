document.addEventListener('DOMContentLoaded', function(){

    //Seleccion de los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    inputEmail.addEventListener('input', (e) => {
        console.log(e.target.value)
    })
    inputEmail.addEventListener('blur', () => {
        console.log("aqui me encuentro")
        
    })
})