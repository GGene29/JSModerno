// Detener una ejecución If con FUNCTION


const puntaje = 450;

if (puntaje > 300) {
    console.log(`Buen puntaje`);
} else if (puntaje >= 450) {
    console.log(`puntaje excelente`);
}
//De esta manera tenemos una función limitada y poco certera

if (puntaje > 300) {
    console.log(`Buen puntaje`);
    
}

if (puntaje >= 450) {
    console.log(`puntaje excelente`);
    
}
//De esta se cumplen ambas validaciones y no la que queremos

//Para esto es mejor utilizalar a traves de un function, dandole uso al return, evitando que se ejecute lo redundante.

function revision() {
    if (puntaje >= 450) {
        console.log(`puntaje excelente`);
        return;
    }

    if (puntaje > 300) {
        console.log(`Buen puntaje`);
        return;
    }

}
revision();
