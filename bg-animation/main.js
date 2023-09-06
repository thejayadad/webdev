
const particleContainer = document.querySelector(".particle-container")
function createParticle(){
    const particle = document.createElement("div")
    particle.className = "particle";
    const size = Math.random() * 20 + 5 + "px";
    particle.style.width = size;
    particle.style.height = size;
    const top = Math.random() *window.innerHeight + "px";
    const left = Math.random() *window.innerWidth + "px";
    particle.style.top = top;
    particle.style.left = left;
    const animationDuration = Math.random() *2+1+"s";
    particle.style.animationDuration = animationDuration;
    particleContainer.appendChild(particle)

    setTimeout(() => {
        particle.remove();

    }, parseFloat(animationDuration) * 1000);
}
setInterval(createParticle, 200);