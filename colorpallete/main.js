const colorPalette = document.getElementById("colorPalette");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generatePalette);

function generatePalette() {
  colorPalette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;

    const colorCode = document.createElement("p");
    colorCode.classList.add("color-code");
    colorCode.textContent = color;

    colorBox.appendChild(colorCode);
    colorPalette.appendChild(colorBox);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
