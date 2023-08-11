//METODOS DE STRING

const casa = 'Vivienda Sumoza';

//.REPLACE ES PARA REEMPLACAR O CABIAR
console.log(casa);
console.log(casa.replace('Vivienda','Casa'))

//.SLICE CORTAR PARTES DE LA CADENA DE TEXTO
console.log(casa.slice(0,8)); 
console.log(casa.slice(8));
//si el primero es mayor que el segundo no ejecuta

//.SUBSTRING
// Limite de caracteres (acorde al rango dado)
console.log(casa.substring(0,8) );
console.log(casa.substring(9) );

//Unico caracter

const juan = 'practicas';
console.log(juan.charAt(5));




