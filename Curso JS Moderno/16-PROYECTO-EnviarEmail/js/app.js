document.addEventListener('DOMContentLoaded', function(){

    //Seleccion de los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
        
    
/*  ======================================
    //correo
    inputEmail.addEventListener('blur', (e) => {
        console.log(e.target.value)
    })
    
    //Motivo o Asunto
    inputAsunto.addEventListener('blur', (e) => {
        console.log(e.target.value)
    })
    
    //Mensaje
    inputMensaje.addEventListener('blur', (e) => {
        console.log(e.target.value)
    })
    =======================================
    Esta manera es válida, pero repetitiva. Por ende, si realiza lo mismo lo ideal es realizar una función

*/ 
    // Asignando Eventos

    inputEmail.addEventListener('blur', validar);       //No se le pasan los parentesis de una vez, porque se llama de una vez. 
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        // vacioInput = e.target.value;
        //trim es un metodo de string, para eliminar espacios en blanco
        if (e.target.value.trim() === ''){
            console.log('campo obligatorio');
            console.log(e.target.id);
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`);
        } else{
            console.log(e.target.value);
        }
    };
    
    function mostrarAlerta(mensaje){
        //creacion de Html
        const error = document.createElement('P');
        //Asignacion del mensaje
        error.textContent = mensaje;
        //Agregar clases
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        //Añade a html la notificacion del campo
        formulario.appendChild(error);
    };

    //blur, input, cut, copy, keydown, keyup, paste  
    //con todos los cambios
})