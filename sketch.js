var gridSize = 16;
function createGrid(size) {
    let gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < gridSize; i++) {
            gridContainer.appendChild((() => {
            var row = document.createElement("div");
            row.classList.add("grid-row");
            return row;
        })());
    }
    gridContainer.childNodes.forEach(row => {
        for (let i = 0; i < gridSize; i++) {
            row.appendChild((() => {
                var gridSquare = document.createElement("div");
                gridSquare.classList.add("grid-square");
                gridSquare.style.border = "1px solid #000000"
                return gridSquare;
            })());
        }
    });
}

createGrid();