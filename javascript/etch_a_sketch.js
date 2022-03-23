const divSketchContainer = document.createElement('div');
divSketchContainer.classList.add('sketch-container');
document.body.appendChild(divSketchContainer);

const divGridRow = document.createElement('div');
divGridRow.classList.add('grid-row');



const divGridElement = document.createElement('div');
divGridElement.classList.add('grid-element');

divSketchContainer.appendChild(divGridRow);

divGridRow.appendChild(divGridElement);
for (let i = 0; i < 15; ++i) {
    divGridRow.appendChild(divGridElement.cloneNode(true));    
};

for (let i = 0; i < 15; ++i) {
    divSketchContainer.appendChild(divGridRow.cloneNode(true));
};

let toggleDraw = true;

function draw(event) {
    event.target.style.backgroundColor = "pink";
}

divSketchContainer.addEventListener('dblclick', () => {
    if (toggleDraw) {
        toggleDraw = false;
        divSketchContainer.addEventListener('mouseover', draw);
    }
    else {
        divSketchContainer.removeEventListener('mouseover', draw);
        toggleDraw = true;
    }
});

const divInfoContainer = document.createElement('div');
divInfoContainer.classList.add('info-container');
document.body.appendChild(divInfoContainer);

const divDrawingInfoContainer = document.createElement('div');
divDrawingInfoContainer.classList.add('drawing-info');
divInfoContainer.appendChild(divDrawingInfoContainer);
divDrawingInfoContainer.textContent = "Double click on a grid to start drawing and double click on a grid to finish drawing."

const divResolutionInfoContainer = document.createElement('div');
divResolutionInfoContainer.classList.add('resolution-info');
divInfoContainer.appendChild(divResolutionInfoContainer);

const button = document.createElement('button');
button.textContent = "Click to set the resolution of the grid";
divResolutionInfoContainer.appendChild(button);