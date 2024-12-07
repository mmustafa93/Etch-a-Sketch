const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size");
const setGridButton = document.getElementById("set-grid");

function createGrid(size) {
    container.innerHTML = ""; // Clear the existing grid
    const squareSize = 600 / size; // Calculate the size of each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "rgb(255, 255, 255)"; // Start with white
        square.dataset.darkness = 0; // Keep track of darkness level
        square.addEventListener("mouseover", handleMouseOver);
        container.appendChild(square);
    }
}

function handleMouseOver(event) {
    const square = event.target;
    let [r, g, b] = getRandomColor();
    let darkness = parseInt(square.dataset.darkness, 10);

    // Darken progressively
    r = Math.floor(r * (1 - darkness / 10));
    g = Math.floor(g * (1 - darkness / 10));
    b = Math.floor(b * (1 - darkness / 10));
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if (darkness < 10) {
        square.dataset.darkness = darkness + 1; // Increase darkness level
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

// Handle grid size input
setGridButton.addEventListener("click", () => {
    const size = parseInt(gridSizeInput.value, 10);
    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100!");
    }
});

// Initialize default grid
createGrid(16);