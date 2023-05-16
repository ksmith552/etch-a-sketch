// grid-container styling

const grid = document.getElementById('grid');

// controls
const controls = document.querySelector('#controls');
const gridButton = document.createElement('button');
gridButton.classList.add('buttons');
gridButton.innerText = 'Select Grid Size';
controls.appendChild(gridButton);

const resetButton = document.createElement('button');
resetButton.classList.add('buttons');
resetButton.innerText = 'Reset SketchPad';
controls.appendChild(resetButton);

const colorButton = document.createElement('button');
colorButton.classList.add('buttons');
colorButton.innerText = 'Choose Color';
controls.appendChild(colorButton);

// create an event listener on all divs for hover that calls the drawing function. possible array?

// event listener for grid size

// event listener for board reset
