

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const sliderContainer = document.querySelector(".slider-container");
const sliders = document.querySelectorAll(".slider");

let current = 0;

function updateSliderPosition() {
  const slideWidth = sliders[0].offsetWidth;
  sliderContainer.style.transform = `translateX(-${current * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
  if (current > 0) {
    current--;
  } else {
    current = sliders.length - 1;
  }
  updateSliderPosition();
});

nextButton.addEventListener("click", () => {
  if (current < sliders.length - 1) {
    current++;
  } else {
    current = 0;
  }
  updateSliderPosition();
});

window.addEventListener("resize", updateSliderPosition);


const leftArrow = document.querySelector(".izquierda");
const rightArrow = document.querySelector(".derecha");
const bebidasTrack = document.querySelector(".slider-bebidas");
const bebidasItems = document.querySelectorAll(".bebidas");

let currentIndex = 0;

function updateBebidasSlider() {
    const itemWidth = bebidasItems[0].offsetWidth;
    bebidasTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = bebidasItems.length - 1;
    }
    if(window.innerWidth <= 600){
      updateBebidasSlider()
    }
});

rightArrow.addEventListener("click", () => {
    if (currentIndex < bebidasItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    if(window.innerWidth <= 600){
      updateBebidasSlider()
    }
});

window.addEventListener("resize",()=>{
  if(window.innerWidth <= 600){
    updateBebidasSlider()
  }
});

