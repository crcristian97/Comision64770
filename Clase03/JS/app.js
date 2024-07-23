//Funciones
//function palabra reservada 
//nombres acorde a la funcionalidad
//Todo lo que esta fuera de metodos,ciclos,funciones,clases,etc,etc es scope global

//Declaramos la funcion
// No recomiendo llamar a una funcion con Mayuscula
// Puede camelCase o snakeCase
//SI O SI LLAMARLA
// function sumar(){
//   //Scope local
//   let numero1 = 5;
//   let resultado = numero1 + 5;

//   return resultado; // 5. tipo string , number
// }

// //Camelcase
// function edadUsuario(){
// }
// //SnakeCase
// function fecha_Matrimonio(){
// }

// //Llamado de la funcion
// sumar();

// let bebida = "coca"
 
// if(bebida === "coca"){

//   bebidaUsuario(bebida);
// }else if(bebida === "sprite"){
//   bebidaUsuario(bebida);
// }else if(bebida === "mirinda"){
//   bebidaMirinda()
// }else {
//   bebidaUsuario(bebida);
 
// }

// function bebidaUsuario (producto){
//   console.log("Estas tomando una ", producto);
// }

// function bebidaMirinda(){
// }

//Para que sirven?
//Para enviar informacion y poder hacer logica interna sin la necesidad
//de redeclarar y reasignar variables optimizando nuestro codigo

//Cuantos parametros?
//JS permite n10
//Buena sintaxis --> maximo 5 parametro
//Se reciben en orden
// let nombre = 'cristian';
// let apellido = 'cabrera';
// let edad = 27;


// function datosUsuario (nombre, apellido, edad){
// //1 nombre = cristian;
// //2 apellido = cabrera;
// //3 edad = 27;
// }
// datosUsuario(nombre, apellido, edad);

// function datosUsuario2(apellido, nombre, edad){
// //apellido = "cristian";
// //nombre = "cabrera";
// //edad = 27;
// }
// datosUsuario2(nombre, apellido, edad);

// function darkModeAplication(){
//   //logica para el darkmode
// }

// //Pueden asignarle a una variable , una function
// let darkMode = darkModeAplication();

// function calculadora(primerNumero, segundoNumero, operacion){
//   debugger
//   //primerNumero = 27
//   //segundoNumero = 3
//   //operacion = +
//   if(operacion === "+"){
//     return primerNumero + segundoNumero;
//   }else if ( operacion === "-"){
//     return primerNumero - segundoNumero;
//   }else if(operacion === "*"){
//     return primerNumero * segundoNumero;
//   }else if(operacion === "/"){
//     return primerNumero / segundoNumero;
//   }else {
//     return 0
//   }

// }

// let numeroUno = 5
// let numeroDos = 3
// let operacion = prompt("Que operacion queres");
// console.log(calculadora(numeroUno, numeroDos, operacion));

// function turnosMedicos(numIteraciones){
//   //scope local
//   let resultado = 0;
//   for(let index = 0; index <= numIteraciones; index++){
//     console.log("Este es el index, "+ index)
//     //scope local
//     resultado += index;
//     console.log("Este es el resultado "+ resultado);
//   }

//   return resultado;
// }
// //scope global
// let numIteraciones = parseInt(prompt("Introduce el numero de iteraciones"));
// //turnosMedicos(numIteraciones);
// console.log("Este es el numero de iteraciones," + turnosMedicos(numIteraciones))


// //funciones ANONIMAS
// //igual qeu la anteriores pero es sin nombre
// //se le asigna a una constante
// const sumar = function (a, b) { 
//   return a + b;
// };

// //Funcion flecha
// //Remplazamos function por "="
// //Utilizamos una flecha
// //Llaves
// const restar = (a, b) => {
//   return a - b;
// }

//calcular precio
//necesitamos saber el precio
//necesitamos saber el iva
//crear 2 funciones, suma y reta
//crear la funcion del iva

// const suma = (a, b) => a + b;

// const resta = (a, b) => a - b;

// const IVA = (precioProducto) => precioProducto * 0.21

// let precioProducto = 500;

// let precioIVA = IVA(precioProducto); //el iva
// let precioActualizado = precioProducto + precioIVA;//sin la function
// //let precioActualizado = suma(precioProducto, precioIVA);//con la function

// console.log(precioActualizado)


// const IVA = 1.21;

// const agregaIVA = (precioSinIVA) => {
//   return precioSinIVA * IVA;
// }

// let precioProducto = parseInt("27000");
// let precioIVA = agregaIVA(precioProducto);
// console.log("El precio del producto con IVA es ", precioIVA)


//  const IVA = 1.21;
//  let importe = parseInt(prompt("Ingresa el importe sobre el cual quieres calcular el IVA:"));

//  const precioConIVA = (imp, iva) => imp * iva;
//  precioConIVA(importe, IVA);

const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = parseInt(prompt("Ingresa los Metros cuadrados de la propiedad cotizar un seguro:"));
const calcularPoliza = m2 => {
  return m2 * valorM2 * comision
};
const valorPoliza = calcularPoliza(M2);
console.log("El costo de la póliza es: $", valorPoliza);