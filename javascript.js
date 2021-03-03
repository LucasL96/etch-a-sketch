let gridContainer = document.querySelector("#grid-container");

let gridDimens = 50;
let selectedColor = "black";

createSketchGrid(gridDimens);

// take in the selected dimensions, making a dimen x dimen grid
// of boxes to be color using your mouse
function createSketchGrid(dimens) {
    let row = document.createElement("div");
    row.className = "flex-row";

    let box = document.createElement("div");
    box.className = "flex-row-item";

    // append boxes into the rows
    for (let i = 0; i < dimens; i++) {
        row.appendChild(box.cloneNode(true));
    }

    // append row to gridContainer dimens amount of times
    for (let i = 0; i < dimens; i++) {
        gridContainer.appendChild(row.cloneNode(true));
    }

    setBoxListeners();

}

// set the background color of a box to the selectedColor
function colorBackground(box) {
    box.style.backgroundColor = selectedColor;
}

// adds listeners to each box, applying colorBackground()
// when the event happens
function setBoxListeners() {
    let boxes = document.querySelectorAll(".flex-row-item");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {   
            colorBackground(e.target);
        });
    });

}