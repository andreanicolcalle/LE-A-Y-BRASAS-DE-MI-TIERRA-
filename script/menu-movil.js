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
