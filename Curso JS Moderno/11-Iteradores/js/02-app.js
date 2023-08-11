
// for (let i = 0 ; i < 11 ; i++ ) {
//     if (i === 5) {
//         console.log(`Este es el Numero Cinco`);
//         continue;
//         //Ejecuta en base su posición, pero no rompe la iteración
//     } if ( i == 8 ){

//         console.log(`Este es el numero Ocho`)
//         break;
//         //El break si rompe y no deja ejecutar más
//     }

//     console.log(`Numero: ${i}`);
// }


const carroCompras = [
    {nombre:'Harina', precio:29,descuento: false},
    {nombre:'Arroz', precio:31},
    {nombre:'Azucar', precio:26, descuento:true},
    {nombre:'Harina Trigo', precio:37},
    {nombre:'Pasta', precio:34, descuento: true},
    {nombre:'Cafe', precio: 200},
    {nombre:'Carne', precio: 80}

]  

for (let i = 0; i < carroCompras.length; i++){
    if (carroCompras[i].descuento) {
        console.log('Producto '+ carroCompras[i].nombre +' tiene un descuento')
        continue; 
    }
    console.log(carroCompras[i].nombre);

}