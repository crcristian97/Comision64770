document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Verificar si el modo oscuro está habilitado en localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  // Evento de clic para el botón de cambio de modo
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Guardar la preferencia en localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.removeItem('dark-mode');
    }
  });
});
