/*let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div);
console.log(parrafo);*/

//CÓDIGO JS
/*
let paises = document.getElementsByClassName("paises");
console.log(paises)

if(paises === "AR"){
  //logica para convertir la moneda en pesos
}else if(paises === "CL") {
  //logica para convertir la moneda en chileno
}else {
  //logica para convertir la moneda en uruguayos
}*/

//CODIGO HTML DE REFERENCIA

//CODIGO JS
/*
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = `<h2>Hola mundo!</h2><p>Lorem ipsum</p>`
*/
/*
const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera'];

function cargarDOM(){
  const titulo = document.getElementById('titulo');
  const listado = document.getElementById('listado');

  titulo.innerText = 'www.mandarfruta.com';

  frutas.forEach( fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    listado.appendChild(li);
  });
}

cargarDOM();*/

/*
let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;

document.body.appendChild(contenedor);
*/

let enviarFormulario = document.getElementById("btnPrincipal");

enviarFormulario.addEventListener('click', ()=> {
  debugger
  let inputname = document.getElementById("inputname");
  let valorCampo = inputname.value;
  if(valorCampo === ""){
    inputname.className = "red-warning"
    console.log("INCORRECTO, ESCRIBA UN NOMBRE")
  }else{
    inputname.className = "info-warning"
  }
})
console.log(inputname)