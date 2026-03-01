let defaultGridSize = 16;

let button = document.querySelector("#grid-button");
button.addEventListener("click", createNewGrid);

function createGrid(size) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.appendChild(grid);

    // seperated row creation and grid-square creation to avoid nesting too deeply.
    for (let i = 0; i < size; i++) {
            grid.appendChild((() => {
            var gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            return gridRow;
        })());
    }
    grid.childNodes.forEach(gridRow => {
        for (let i = 0; i < size; i++) {
            gridRow.appendChild((() => {
                var gridSquare = document.createElement("div");
                gridSquare.classList.add("grid-square");
                gridSquare.addEventListener("mouseenter", (event) => {
                    event.target.classList.add("fill"); // Add fill class to turn square black
                });
                return gridSquare;
            })());
        }
    });
}

function destroyGrid() {
    let gridContainer = document.querySelector(".grid");
    if (!gridContainer) {
        return;
    }
    gridContainer.remove();
}

function createNewGrid() {
    var gridSize = Number(prompt("choose a grid size between 1-100"));
    while (gridSize > 100 || gridSize < 1 || Number.isNaN(gridSize)) {
        gridSize = Number(prompt("choose a grid size between 1-100"));
    }

    destroyGrid();
    createGrid(gridSize);
}

createGrid(defaultGridSize);