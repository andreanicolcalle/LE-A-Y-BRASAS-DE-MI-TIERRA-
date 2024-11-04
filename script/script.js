let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slider');
  const sliderWrapper = document.querySelector('.slider-wrapper');

  // Actualizar el índice sin permitir que salga de los límites
  if (direction === 1 && currentIndex < slides.length - 1) {
    currentIndex += 1;
  } else if (direction === -1 && currentIndex > 0) {
    currentIndex -= 1;
  }

  // Definir el valor según el ancho de la ventana
  let valor;
  if (window.innerWidth <= 600) {
    valor = 50;
  } else {
    valor = 33;
  }
  // Aplicar la transformación para mover el slider
  sliderWrapper.style.transform = `translateX(-${currentIndex * valor}%)`;
}


const menuIcon = document.getElementById('menu-movil');
const menuContainer = document.querySelector('.nmovil-container');
const capa = document.querySelector(".capa");

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
  
  if (capa.style.display === "block") {
    capa.style.display = "none";
  } else {
    capa.style.display = "block";
  }
});




// Variables para rastrear el deslizamiento
let startX = 0;
let currentSlide = 1; // Comienza en el primer slide

// Seleccionar los radio buttons
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

// Seleccionar el contenedor de slides para detectar el deslizamiento
const slidesContainer = document.getElementById("slides-container");

// Evento al comenzar el toque en el dispositivo móvil
slidesContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX; // Posición inicial del toque
});

// Evento al finalizar el toque
slidesContainer.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX; // Posición final del toque
  const deltaX = endX - startX; // Diferencia entre inicio y fin

  // Verificar si el deslizamiento es hacia la izquierda o derecha
  if (deltaX < -50) {
    // Deslizar hacia la izquierda
    currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
  } else if (deltaX > 50) {
    // Deslizar hacia la derecha
    currentSlide = currentSlide === 1 ? 3 : currentSlide - 1;
  }

  // Actualizar el slide activo según el número actual
  if (currentSlide === 1) {
    slide1.checked = true;
  } else if (currentSlide === 2) {
    slide2.checked = true;
  } else if (currentSlide === 3) {
    slide3.checked = true;
  }
});



