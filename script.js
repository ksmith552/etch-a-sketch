const gridDefault = 16;
let gridSelection;

/**
 * Creates Full grid
 */
function createGrid() {
  for (let i = 0; i < gridSelection || i < gridDefault; i++) {
    createGridRow();
  }
  changeColor();
}

/**
 * creates a parent div
 * creates children div within the parent
 */
function createGridRow() {
  const parentRow = document.createElement('div');
  parentRow.classList.add('parent-row');
  grid.appendChild(parentRow);
  for (let i = 0; i < gridSelection || i < gridDefault; i++) {
    const rowChildren = document.createElement('div');
    rowChildren.classList.add('row-children');
    rowChildren.style.borderStyle = 'double';
    parentRow.appendChild(rowChildren);
  }
}

/**
 * changes the grid size based on player input
 */
function changeGridSize() {
  gridSelection = prompt(
      'Input the desired amount of sqaures per side',
      'type a number between 16 - 100',
  );
  grid.replaceChildren();
  if (gridSelection >= 16 && gridSelection <= 100) {
    createGrid(gridSelection);
  } else {
    alert('Error, please input a valid number in between 16-100');
    createGrid(gridDefault);
  }
}

/**
 * changes color over on mouseover
 */
function changeColor() {
  const rowChildren = document.getElementsByClassName('row-children');
  for (let i = 0; i < rowChildren.length; i++) {
    rowChildren[i].addEventListener('mouseover', function(event) {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      event.target.style.backgroundColor = color;
    });
  }
}

/**
 * resets all colors back to white
 */
function reset() {
  const rowChildren = document.getElementsByClassName('row-children');
  for (let i = 0; i < rowChildren.length; i++) {
    const rowChildrens = rowChildren[i];
    if (rowChildrens.style.backgroundColor !== 'white') {
      rowChildrens.style.backgroundColor = 'white';
    }
  }
}
