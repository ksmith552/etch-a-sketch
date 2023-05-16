// create a function that creates grid sqaures

/**
 * This function calls createGridRow() 16 times, creating the full grid
 */
function createGrid() {
  for (let i = 0; i < 16; i++) {
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

  grid.appendChild(parentRow);

  for (let i = 0; i < 16; i++) {
    const rowChildren = document.createElement('div');
    rowChildren.classList.add('row-children');
    rowChildren.style.borderStyle = 'double';
    rowChildren.innerText = 'hello';
    parentRow.appendChild(rowChildren);
    rowChildren.addEventListener('mouseover', function(event) {
      rowChildren.style.backgroundColor = 'black';
    });
  }
}

// create a function that will prompt user input for a grid size selection *100 limit*

// create a function that changes the color of a div to BLACK when hovered on
/**
 *
 */

// create a function that resets the board to default value
