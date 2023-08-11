// AÑADIR FUNCIONES A UN OBJETO

const reproductor = {
     cancion:  '',

    reproducir: id => console.log(`Reproduciendo el tema ${id}`),
    
    pausar: () => console.log(`pausando...`),
    
    borrar: id => console.log(`Eliminar tema ${id}`),
    
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    //SET es para agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    //GET una manera de obtener valores
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'Musica Ligera';
reproductor.obtenerCancion;

//========== TUTORIAL ==========

reproductor.reproducir(40);
reproductor.borrar(15);
reproductor.reproducir(14);
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');

//METODOS DE PROPIEDAD 
