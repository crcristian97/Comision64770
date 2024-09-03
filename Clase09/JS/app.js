const URL = "https://jsonplaceholder.typicode.com/posts";

function renderProducts(productos){
  //foreach
  //innerhtml
  //appendChild
}

async function cargarPublicaciones(URL) {
   const resp = await fetch(URL)
   const posts = await resp.json()
         console.table(posts)
         renderProducts(posts);
}

function confirmarCarga() {
  Swal.fire({
      title: '¿Descargar publicaciones del servidor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, ver posts',
      cancelButtonText: 'No por ahora'
  }).then((response)=> {
      if (response.isConfirmed) {
          cargarPublicaciones(URL)
      }
  })
}
confirmarCarga();