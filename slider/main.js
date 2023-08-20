// script.js
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let position = 0;

prevBtn.addEventListener("click", () => {
    position += 100;
    if (position > 0) {
        position = -100 * (slider.children.length - 1);
    }
    slider.style.transform = `translateX(${position}%)`;
});

nextBtn.addEventListener("click", () => {
    position -= 100;
    if (position < -100 * (slider.children.length - 1)) {
        position = 0;
    }
    slider.style.transform = `translateX(${position}%)`;
});
