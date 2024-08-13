const nombres = ['Ana', 'Juan', 'María', 'Luisa', 'Pedro', 'Pablo'];
const comision64770 = []
const nombresLargos = nombres.filter((name) => {
    if(name.length){
      console.log("Hay nombres en la comision");
      comision64770.push(name);
      // Pegar los nombres en la tabla de estudiantes
    }else {
      // mostrar un mensje en la tabla diciendo que no hay estudiantes
    }
  }
);

// en esta parte mostramos con una logica que NO VIMOS los alumnos en una tabla


function mayorQue(n) {
  debugger
  return (m) => m > n
}
let mayorQueDiez = mayorQue(10)
console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

const numeros= [1, 2, 3, 4]

function valorDuplicado(numeros){
  //ducplicar los numeros
  let resultado = numeros * 2
}

porCadaUno(numeros, valorDuplicado(numeros))

porCadaUno(numeros, (el)=> {
  duplicado.push(el * 2)
})


//Diferencia entre map y foreach
// el map tira a la inmutabilidad, es decir te crea una copia del array original y va iterarndo uno por uno
// el foreach lo que hace es la iteracion directa en el array

//CREAR UNA HAMBURGESERIA

/*
Crear en JS una clase con el nombre hamburguesa
En su constructor define "nombre", "precio",
"ingredientes" y "número de combo"
Luego de definir la clase JS, deberás instanciar al
menos 7 hamburguesas con las respectivas
características solicitadas por el constructor, para
hacerlo toma como base la siguiente información:
*/

class Hamburguesa{
  constructor(nombre = '', precio = 0, ingredientes = [], numeroCombo = 1){
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.numeroCombo = numeroCombo;
  }
}

const hamburguesa = []

const bicMac = new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1); // agregar al carrito esta hamburgesa
const bicStaticMac = new Hamburguesa('Bic Static mac', 5000, ['Carne', 'Cheddar'], 1);
const bicMac2 = new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1);
const bicMac3 = new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1);
const bicMac4 = new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1);
const bicMac5 = new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1);

hamburguesa.push(bicMac);
hamburguesa.push(bicStaticMac);
hamburguesa.push(bicMac2);
hamburguesa.push(bicMac3);

let hamburguesaBicMac = {
  nombre : 'Bic Mac',
  precio: 5000,
  ingredientes: ['Carne', 'Cheddar'],
  numeroCombo:2
}

const hamburguesasCaras = hamburguesa.filter((hamburgesa) => hamburgesa.precio > 200);

//ESTO ES UN ARRAY DE OBJECTOS UTILIZANDO UN CONSTRUCTOR
// const hamburguesas = [
//   new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Bic Static mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Super mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Super mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Bic mac', 5000, ['Carne', 'Cheddar'], 1),
//   new Hamburguesa('Cuarto de libra con queso', 5000, ['Carne', 'Cheddar'], 1)
// ]

//ESTO ES UN ARRAY DE OBJECTOS UTILIZANDO OBJECTOS Y ARRAYS
const alumnosComision = [];

const alumnoTomas = { nombre: 'Tomas', edad: 27}
const alumnoDamian = { nombre: 'Damian', edad: 27}
const alumnoKevin = { nombre: 'Kevin', edad: 27}