const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size");
const setGridButton = document.getElementById("set-grid");

function createGrid(size) {
    // Clear any existing grid
    container.innerHTML = '';

    // Set the container width and calculate square size
    const containerWidth = 600; // Fixed container width
    const squareSize = containerWidth / size;

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

// Event listener for the "Set Grid" button
setGridButton.addEventListener("click", () => {
    const gridSize = parseInt(gridSizeInput.value);

    // Validate input and set grid
    if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Initialize the grid with the default size
createGrid(16);