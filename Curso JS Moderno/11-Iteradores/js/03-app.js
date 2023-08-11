// FIZZ BUZZ  

// Multiplos de 3 ---> FIZZ
//Multiplos de 5 --> BUZZ
// Multiplos entre ambos --> FIZZBUZZ!

// for (let i = 1; i <= 100; i++){
//     if(i % 3 == 0) {
//         console.log('FIZZ')
//         continue;
//     }else if (i % 5 == 0){
//         console.log('BUZZ')
//         continue;
//     }else if (i % 3 == 0 && i % 5 == 0){
//         console.log('FIZZBUZZ!')
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }
//HECHO POR MI

for (let i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FIZZBUZZ!')
        continue;
    }else if (i % 5 === 0){
        console.log('BUZZ')
        continue;
    }else if(i % 3 === 0) {
        console.log('FIZZ')
        continue;
    }else{
        console.log(i);
        }
}
