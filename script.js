const container = document.querySelector('.container');
const button = document.querySelector('button');

const size = 16;
function createGrid(size) {
    for (let i = 0; i < size; i++) {  // creating rows for grid here//
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < size; j++) { // creating square divs inside the rows//
    const widthAndHeight = 600 / size;      //logic for calculating width and height of each cell in the grid  based on the total width of our continer 960 px and no of cells size//
    const gridBox = document.createElement('div'); 
    gridBox.classList.add('grid-box'); // adding class to our gridBox for styling in css//
    gridBox.style.width = `${widthAndHeight}px` // updating the size of newly created divs to make it more responsive//
    gridBox.style.height = `${widthAndHeight}px`
    gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'blue'
    });
    row.appendChild(gridBox); //adding gridBox inside our row//
    }

    container.appendChild(row); // adding our row to inside our main container //

    }
}

button.addEventListener('click', () => {
    const userInput = parseInt(prompt('Enter a number less than 100 to change Grid Size'));
    if (userInput>100) {
        return 0;
    }

    else {
    container.innerHTML = "";  // Remove existing grid and create new one with userInput//
    createGrid(userInput);
    }
 });

createGrid(size); // calling our function with the size //
