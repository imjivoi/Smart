const slider = document.querySelector(".slider-content");
const slide = document.querySelectorAll(".slider-item");
const dot = document.querySelectorAll(".scale-item");
const arrowLeft = document.querySelector(".arrow-left-box");
const arrowRight = document.querySelector(".arrow-right-box");
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".header__menu");
const menuBurg = document.querySelector(".hamburger");
const menuCross = document.getElementById("cross");
const header = document.querySelector("header");
///////scroll///////
function headerScroll() {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

window.addEventListener("scroll", () => {
  headerScroll();
});

//////menu-burger//////

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-hide");
  menuBurg.classList.toggle("open");
});

//////////slider///////
function checkWidth() {
  let windowWidth = document.body.clientWidth;
  if (windowWidth < 1000) {
    for (let i = 0; i < slide.length; i++) {
      if (slide[i].classList.contains("slide-active") === false) {
        slide[i].classList.add("slide-hide");
      }
    }
  }
}

checkWidth();

let currentSlide = 0;
let currentDot = 0;
let windowWidth = document.body.clientWidth;

function nextSlide() {
  if (windowWidth < 1000) {
    for (let i = 0; i < slide.length; i++) {
      if (currentSlide === slide.length - 1) {
      } else {
        slide[currentSlide].classList.remove("slide-active");
        slide[currentSlide].classList.add("slide-hide");
        slide[currentSlide + 1].classList.add("slide-active");
        slide[currentSlide + 1].classList.remove("slide-hide");
      }
    }

    if (currentSlide === slide.length - 1) {
    } else {
      currentSlide++;
    }
  } else {
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("slide-active");
    }
    slide[currentSlide + 1].classList.add("slide-active");

    if (currentSlide < slide.length - 2) {
      currentSlide++;
    } else {
      currentSlide = slide.length - 2;
    }
    if (
      slide[slide.length - 1].classList.contains("slide-active") &&
      slide[slide.length - 1].classList.contains("slide-hide")
    ) {
      slide[slide.length - 1].classList.remove("slide-hide");
      slide[0].classList.add("slide-hide");
    }
  }
}

function previousSlide() {
  if (windowWidth < 1000) {
    for (let i = 0; i < slide.length - 1; i--) {
      if (currentSlide === slide[i]) {
      } else {
        slide[currentSlide].classList.remove("slide-active");
        slide[currentSlide].classList.add("slide-hide");
        slide[currentSlide - 1].classList.add("slide-active");
        slide[currentSlide - 1].classList.remove("slide-hide");
      }
    }
    if (currentSlide === slide[i]) {
    } else {
      currentSlide--;
    }
  } else {
    for (let i = slide.length - 1; i > 0; i--) {
      slide[i].classList.remove("slide-active");
    }
    slide[currentSlide].classList.add("slide-active");

    if (currentSlide > 0) {
      currentSlide--;
    }
    if (
      slide[0].classList.contains("slide-active") &&
      slide[0].classList.contains("slide-hide")
    ) {
      slide[0].classList.remove("slide-hide");
      slide[slide.length - 1].classList.add("slide-hide");
    }
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
