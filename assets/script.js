const slider = document.querySelector(".slider-content");
const slide = document.querySelectorAll(".slider-item");
const dot = document.querySelectorAll(".scale-item");
const arrowLeft = document.querySelector(".arrow-left-box");
const arrowRight = document.querySelector(".arrow-right-box");

let currentSlide = 0;
let currentDot = 0;

function nextSlide() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("slide-active");
  }
  slide[currentSlide + 1].classList.add("slide-active");

  if (currentSlide < slide.length - 2) {
    currentSlide++;
  } else {
    currentSlide = slide.length - 2;
  }
}

function previousSlide() {
  for (let i = slide.length - 1; i > 0; i--) {
    slide[i].classList.remove("slide-active");
  }
  slide[currentSlide].classList.add("slide-active");

  if (currentSlide > 0) {
    currentSlide--;
  }
}

function nextDot() {
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("scale-active");
  }
  dot[currentDot + 1].classList.add("scale-active");

  if (currentDot < dot.length - 2) {
    currentDot++;
  } else {
    currentDot = dot.length - 2;
  }
}

function previousDot() {
  for (let i = dot.length - 1; i > 0; i--) {
    dot[i].classList.remove("scale-active");
  }
  dot[currentDot].classList.add("scale-active");

  if (currentDot > 0) {
    currentDot--;
  }
}

arrowRight.addEventListener("click", () => {
  nextSlide();
  nextDot();
});

arrowLeft.addEventListener("click", () => {
  previousSlide();
  previousDot();
});
