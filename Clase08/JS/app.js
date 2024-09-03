 async function fetchData() {
     const apiUrl = '../../Clase08/JSON/productos.json';
     try {
         const response = await fetch(apiUrl);
         const data = await response.json();
          mostrarDatos(data)
          messageAlert('info', 'la informacion es correcta');
     } catch (error) {
      cartelAdvertencia()
    }
}

//fetchData();
const buttonAlert = document.getElementById('showAlertButton');

buttonAlert.addEventListener('click', () => {
    try {
        // Completar aquí: Utilizar SweetAlert para mostrar un mensaje de éxito
        Swal.fire({
            title: "Estas seguro que quieres eliminar los productos del carrito",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No `
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Datos eliminados correctamente", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Perfecto, volvemos atras", "", "info");
            }
          });
    } catch (error) {
        console.error('Error al mostrar el mensaje:', error);
        messageAlert('warning', 'Contactese con su administrador');
    }
});


function messageAlert(icon, title){
    Swal.fire({
        icon: icon,
        background: '#fff',
        title: title,
        text: 'Mensaje de éxito mostrado con SweetAlert.',
    });
}
