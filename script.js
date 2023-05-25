const gridDefault = 16;
let gridSelection;

// create a function that creates grid sqaures

/**
 * This function calls createGridRow() 16 times, creating the full grid
 */
function createGrid() {
  for (let i = 0; i < gridSelection || i < gridDefault; i++) {
    createGridRow();
  }
}
/**
 *this function creates a parent div and appends it to the grid
 *the function then loops to create 16 children for the parent
 */
function createGridRow() {
  const parentRow = document.createElement('div');
  parentRow.classList.add('parent-row');
  grid.appendChild(parentRow); // / this function is hugggee. make this better
  for (let i = 0; i < gridSelection || i < gridDefault; i++) {
    const rowChildren = document.createElement('div');
    rowChildren.classList.add('row-children');
    rowChildren.style.borderStyle = 'double';
    parentRow.appendChild(rowChildren);
    rowChildren.addEventListener('mouseover', function(event) {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      rowChildren.style.backgroundColor = color;
    });
  }
}

// create a function that will prompt user input for a grid size selection *100 limit*
/**
 * This invokes when the rest button is pressed
 * the prompt takes input from the user, removes the previous grid,
 * and creates the new user defined grid
 */
function gridSize() {
  gridSelection = prompt(
      'Input the desired amount of sqaures per side',
      'type a number between 16 - 100',
  );
  grid.replaceChildren();
  if (gridSelection <= 100) {
    // 16 grid squares minimum, fix this
    // add any input that is not an integer of 16-100 as null/undefined
    createGrid(gridSelection);
  } else {
    createGrid(gridDefault);
    alert('Error, please input a valid number in between 16-100');
  }
}
// create a function that will prompt user input for a grid size selection *100 limit*

// create a function that changes the color of a div to BLACK when hovered on
/**
 *
 */

// create a function that resets the board to default value
