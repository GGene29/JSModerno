// AÑADIR FUNCIONES A UN OBJETO

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo el tema ${id}`)
    },
    pausar: function() {
        console.log(`pausando...`)
    },
    borrar: function(id) {
        console.log(`Eliminar tema ${id}`)
    },
    // ================ TUTORIAL ======
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    }


    // Mi manera de hacerlo
    // agregar: function(persona) {
    //     return `Iniciando Playlist ${persona}`
    // },
    // repro: function(user) {
    //     console.log(`Se esta reproduciendo playlist ${user}`)
    // }

}

//========== TUTORIAL ==========

reproductor.reproducir(40);
reproductor.borrar(15);
reproductor.reproducir(14);
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');

//METODOS DE PROPIEDAD 








//  Mi manera de hacerlo

// const persona = prompt('Ingrese el nombre de su playlist');
// const user = persona;

// reproductor.reproducir(40);
// reproductor.borrar(15);
// reproductor.reproducir(14);
// reproductor.pausar();
// reproductor.agregar(persona);
// console.log(reproductor.agregar(persona))
// reproductor.repro(user);
