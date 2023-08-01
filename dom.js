const grid = document.getElementById('grid');
// controls
const controls = document.querySelector('#controls');

// Grid Selection
const gridButton = document.createElement('button');
gridButton.classList.add('buttons');
gridButton.addEventListener('click', changeGridSize);
gridButton.innerText = 'Select Grid Size';
controls.appendChild(gridButton);

// Reset grid
const resetButton = document.createElement('button');
resetButton.classList.add('buttons');
resetButton.innerText = 'Reset SketchPad';
controls.appendChild(resetButton);

resetButton.addEventListener('click', reset);

// Change color
const colorButton = document.createElement('button');
colorButton.classList.add('buttons');
colorButton.innerText = 'Choose Color';
controls.appendChild(colorButton);
