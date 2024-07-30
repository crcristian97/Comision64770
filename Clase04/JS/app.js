//Arrays
// //Es un tipo de dato que puede almacenar distintos valores

// let arrayNumbers = [12, 14, 36];
// let arrayString = ["12", "14", "36"];
// let arrayBoolean = [true, false, true];
// let arrayCombined = [true, 12, "cristian", ["perro", "gato"], false];

// //Acceso al array
// //llamamos al array original y le pasamos el [] con el numero del indice
// //tener en cuenta que los indice arrancan en 0

// console.log(arrayNumbers.length);
// //el .lenght nos permite saber la longitud del array
// // es buena practica para recorrer arrays pensando en la escalabilidad del proyecto
// for(let index = 0; index < arrayNumbers.length; i++){
//   //logica correspondiend
// }


// //Metodo push
// //Agrega un elemento al final y no es INMUTABLE
// //INMUTABLE = No toca los datos originales
// let alumnosComision = ["Federico", "Mohart", "Auguston"];
// let alumnoNuevo = "Denise";
// alumnosComision.push(alumnoNuevo);

// //El unshift, te agrega el elemento adelante
// //El metodo pop (el ultimo) && shift (el primero) te eliminan los datos;
// //El metodo join genera un string con todos los elementos

// let fechaUSA = '07/29/2024';

// //dividir la fecha '/'
// let partesFechas = fechaUSA.split('/').join("-") // 29-07-2024
// let fechaArg = [partesFechas[1], partesFechas[0], partesFechas[2]].join("-") // 29/07/2024
// console.log("Fecha Arg", partesFechas);


/////////////////////////

//Fabrica AR-COR
class nombrePersona {
  constructor(id = 0, name = "", email = "", gender = "", status = "") {
      this.id  = id;
      this.name  = name;
      this.email = email;
      this.gender = gender;
      this.status = status;
  }
}

const persona = [];

persona.push(new nombrePersona(7225683, "Shresthi Johar", "shresthi_johar@bode.example", "female", "inactive"));
persona.push(new nombrePersona(7225682, "Maheswar Somayaji", "maheswar_somayaji@nolan.test", "male", "active"));

console.log(persona)
