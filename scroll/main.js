const sections = document.querySelectorAll(".reveal-section");

function revealSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const triggerPosition = windowHeight * 0.55;

        if (sectionTop < triggerPosition) {
            section.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("resize", revealSections);

revealSections();