// scripts.js
let donantes = 0;
const meta = 100; // Meta de personas que deben donar

function registrarDonacion() {
  donantes++;
  actualizarProgreso();
}

function actualizarProgreso() {
  const porcentaje = (donantes / meta) * 100;
  const progressElement = document.getElementById('progress');
  progressElement.style.width = porcentaje + '%';

  if (porcentaje >= 100) {
    alert('¡Hemos alcanzado nuestra meta de donaciones! Gracias por tu apoyo.');
  }
}