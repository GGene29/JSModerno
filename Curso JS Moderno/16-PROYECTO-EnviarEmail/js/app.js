document.addEventListener('DOMContentLoaded', function(){

    //Seleccion de los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
        
    
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
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement)

        console.log('despues del if')
        
    };
    
    function mostrarAlerta(mensaje, referencia){
        //parte 2 pero EFECTIVA
        // limpiarAlerta(e.target.parentElement)
        limpiarAlerta(referencia)
        
        //parte 1
        //Comprobar existencia de alerta (para tener solo una)
        // const alerta = referencia.querySelector('.bg-red-600')
        // console.log(alerta)
        // if (alerta){
        //     alerta.remove()
        // }



        //creacion de Html
        const error = document.createElement('P');
        //Asignacion del mensaje
        error.textContent = mensaje;
        //Agregar clases
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        //Añade a html la notificacion del campo
        referencia.appendChild(error);
    };

    function limpiarAlerta(referencia) {
        console.log('limpiando')
        const alerta = referencia.querySelector('.bg-red-600');
        console.log(alerta)
        if (alerta){
            alerta.remove();
        }
    }

    //blur, input, cut, copy, keydown, keyup, paste  
    //con todos los cambios
})