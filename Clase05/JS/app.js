//Fabrica
class Persona {
  constructor( nombre= "", edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
    saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

let comision64770 = [];

const alumno1 = new Persona('Brenda Romero', 27);
const alumno2 = new Persona('Damian Bostta', 37);
const alumno3 = new Persona('Augusto Balladone', 24);
const alumno4 = new Persona('Juan', 30);

alumno4.saludar();

comision64770.push(alumno1);
comision64770.push(alumno2);
comision64770.push(alumno3);

console.log(comision64770)

//clave - valor
let profesorJs = {
    nombre: "Cristian",
    apellido: "Cabrera",
    esProfesor: true,
    edad: 27
}
let profesorJsParse = JSON.stringify(profesorJs);
localStorage.setItem('Profesor', JSON.stringify(profesorJsParse));

//Accedemois de 2 formas
profesorJs["nombre"];
profesorJs.edad;

//Reasignar 
profesorJs["nombre"] = "Agustin";
profesorJs.edad = 28;
// el localStorage / sesionStorage tiene 3 metodos
// clave - valor
//Enviar informacion al local
localStorage.setItem('idioma', 'ES');

//Recibir informacion del local
// const idiomaApp = localStorage.getItem('idioma');

// if(idiomaApp === 'ES'){

// }else if( idiomaApp === "EN"){

// }else {

// }

// const productoCarrito = localStorage.getItem('productoCarrito') || [];

// if(productoCarrito){
//   alert("Che veni y termina tu compra :)")
// }

// //3 metodo 
// localStorage.clear(); // Te borra TODO EL LOCAL STORAGE
// localStorage.removeItem('idioma');

let productos = [
  { id: 1, name: 'ProductoA', price: 100 },
  { id: 2, name: 'ProductoB', price: 200 },
  { id: 3, name: 'ProductoC', price: 300 }
]

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}

for ( const producto of productos){
  guardarLocal(producto.id, JSON.stringify(productos))
}


guardarLocal('listaPRODUCTOS', JSON.stringify(productos))