//Operador && para dos o más condiciones

const usuario = false;
const puedePagar = true;


if (usuario && puedePagar) {
    console.log('Usuario Pagando...');

} else if (usuario == false && puedePagar == false){
    console.log('No tiene como pagar, ni esta registrado');

} else if (usuario == false && puedePagar) {
    console.log('Usted no esta registrado');
    registro();
    console.log('Usuario Pagando...');
} else {
        console.log('Usted no tiene como pagar, así este registrado')
}
function registro() {
    console.log(`registrando...`);
    console.log(`Bienvenido Usuario`);
};