const container = document.getElementById("container");

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

// Initialize the grid
createGrid(9); // 16x16 grid