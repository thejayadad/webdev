// script.js
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener("click", () => {
        item.classList.toggle("active");
        if (item.classList.contains("active")) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});
