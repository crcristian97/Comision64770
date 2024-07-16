// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES'); // 5 
// let texto = prompt('INGRESE TEXTO A REPETIR'); // Hola coders
// //parseInt(cantidad);
// // MAL
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }

// //BIEN 
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }


//Ciclo for
// inicializacion de variable : index = 0;
// condicion : cuando se corta el ciclo?
// actualizacion  : ++ || -- 

// ¿Qué tiene que hacer este código?
//El objetivo de este código es pedir al usuario una cantidad de repeticiones y un texto,
// luego imprimir el texto la cantidad de veces especificada en la consola

//¿Por qué no cumple con su función?
// El ciclo for no incrementa el índice (index): 
// La expresión de incremento del índice index++ está faltando, lo que causa un bucle infinito.
// El valor de cantidad debe convertirse a número: prompt retorna una cadena
//  y debe ser convertida a número para su uso en el ciclo for.

/*
let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}
*/

// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {

//     }
//     alert("lado");
// }

// ¿Qué tiene que hacer este código?
// El objetivo parece ser alertar al usuario con la palabra "lado" una cantidad de veces equivalente al número de lados ingresado.

// ¿Por qué no cumple con su función?
// El valor de lados debe convertirse a número: 
// Similar al código anterior, prompt retorna una cadena y debe ser convertida a número.
// Condición if (index > 3) es irrelevante: 
// No afecta la lógica y no tiene un bloque de código asociado.


/*let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 0; index < lados; index++) {
    alert("lado");
}
  */

//let numeroUsuario = prompt("Ingrese un numero");
// debugger
// if(numeroUsuario % 2 === 0){
//     console.log("El numero es par");
// }else {
//     console.log("El numero es impar");
// }

//FIZZ BUZZ

//1-Si es divisible por 5 && 3 : imprimi FIZZBUZZ
//2-Si es divisible por 5 : imprimi BUZZ
//3-Si es divisible por 3 : imprimi FIZZ
//4- Si no es divisible por nada, hace programacion defensiva


// for(let i = 1; i <= numeroUsuario; i++){
//     if(i % 3 === 0 && i % 5 === 0 ){
//         console.log("FIZZBUZZ");
//     }else if ( i % 3 === 0){
//         console.log("FIZZ");
//     }else if (i % 5 === 0 ){
//         console.log("BUZZ");
//     }else {
//         console.log(i);
//     }
// }

////////////////ejercicio while

let pares = 0;
let impares = 0;
let input;

while (input !== 'salir') {
    input = prompt('Ingrese un número o "salir" para terminar');
    if (input !== 'salir') {
        let numero = parseInt(input);
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
}

console.log('Números pares:', pares);
console.log('Números impares:', impares);