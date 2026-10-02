// Registro de PWA (Service Worker)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('PWA Service Worker Activo:', reg.scope))
      .catch(err => console.log('Error PWA:', err));
  });
}

// Función interactiva para cambiar entre las 4 pestañas de abajo
function switchTab(tabName) {
  // 1. Ocultar todas las páginas
  const pages = document.querySelectorAll('.tab-page');
  pages.forEach(page => page.classList.add('hidden'));

  // 2. Mostrar la página seleccionada
  const targetPage = document.getElementById(`tab-${tabName}`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }

  // 3. Desactivar todos los botones de la barra inferior
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  // 4. Activar el botón correspondiente
  const activeBtn = document.getElementById(`nav-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}