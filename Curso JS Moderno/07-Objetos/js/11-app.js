var empleado = 'camarero';
var empleado1 = 'coctelero';


const trabajo = {
    empleado:"obrero",
    empleado1 : "contratado",
    //METODO
    mostrarInfo: function() {
        console.log(`El personal ${empleado} es : ${empleado1}`);
        console.log(`El personal ${trabajo.empleado} es : ${empleado1}`);
        console.log(`Personal ${this.empleado} es: ${this.empleado1}`);
        console.log(`El personal ${empleado} es : ${trabajo.empleado1}`);
    }
};
//this. == se refiere a los valores que existen dentro del mismo objeto

//METODO
trabajo.mostrarInfo();
