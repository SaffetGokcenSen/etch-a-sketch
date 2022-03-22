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

let doubleClicked = true;

function draw(event) {
    event.target.style.backgroundColor = "pink";
}

divSketchContainer.addEventListener('dblclick', () => {
    if (doubleClicked) {
        doubleClicked = false;
        divSketchContainer.addEventListener('mouseover', draw);
    }
    else {
        divSketchContainer.removeEventListener('mouseover', draw);
        doubleClicked = true;
    }
});