// let edadUser = 18; // se saca del input html

// if(edadUser >= 18){
//   console.log("Sos mayor, podes pasar");
// }

//Diferencia entre == y ===
//el doble igual compara el valor 
//el triple igual compara el valor y el tipo de dato
//tipo de dato --> number, string, object, symbol
//valor dato --> 2, 3 ,cristian;

// let userAge = prompt("Cuantos anios tenes");
// if(userAge === 18){
//   console.log("Felicitaciones ya sos mayor de edad");
// }else {
//   console.log("Bajon, nose cuantos anios tenes");
// }

// let carnetUsuario = false;
// let esMayorEdad = true;

// if(carnetUsuario === true && esMayorEdad === true ){
//   console.log("Puede manajar y sos mayor");
// }else if ( esMayorEdad === true && carnetUsuario === false){
//   console.log("Sacate el carnet");
// }else if (esMayorEdad === false && carnetUsuario === true ){
//   console.log("Te falta cumplir anios");
// }else {
//   console.log("Te falta carnet y ser mayor")
// }

// // El operador && ambas condiciones tiene que ser true para entrar hacer la logica
// // El operador || con que una condicion sea true ya entra en la logica
// // El operador de negacion


//  let userAge = prompt("Cuantos anios tenes");
//  if(userAge !== 18){
//    console.log("Bajon, nose cuantos anios tenes");
//  }

//  let paisUsuario = "Argentin"
// if(userAge !==Argentino){
//   console.log("no sos campeon")
// }else {
//   console.log("sos campeon")
// }

//Crear tabla de multiplicar

//let numero = parseInt(prompt('Ingrese un numero'));
// let numero = 3; // hasta que numero queres la tabla de multiplicar

// for(let index = 1; index <= 10; index++){
//   let resultado = numero * index;
//   console.log(numero + " X " + index + " = " + resultado);
// }

//yo quiero que los alumnos de esta comision los que tengan nota 10 van al top10
//array
//objecto
//metodo de array
// for --> check

// debugger
// while(entrada != 'ESC'){
//   alert("El usuario ingreso "+ entrada);
//   entrada = prompt("Ingresa otro dato")
// }



let palabrasCortas = [];
let palabrasLargas = [];

// Pedir al usuario que ingrese el número de palabras que quiere analizar
let numeroPalabras = prompt("¿Cuántas palabras quieres ingresar?");
// programacion

for (let i = 0; i < numeroPalabras; i++) {
    let palabra = prompt(`Ingresa la palabra ${i + 1}:`);

    if (palabra.length < 5) {
        console.log(`"${palabra}" es una palabra corta.`);
        palabrasCortas.push(palabra);
    } else {
        console.log(`"${palabra}" es una palabra larga.`);
        palabrasLargas.push(palabra);
    }
}


console.log(`Palabras cortas: ${palabrasCortas.join(", ")}`);
console.log(`Palabras largas: ${palabrasLargas.join(", ")}`);
