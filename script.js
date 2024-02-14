const container = document.querySelector('.container');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

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
        gridBox.style.backgroundColor = 'blue';
    });

    btn2.addEventListener('click', () => {
        const randomColor = getRandomColor();
        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = randomColor;
        });
    });

    row.appendChild(gridBox); //adding gridBox inside our row//
    }

    container.appendChild(row); // adding our row to inside our main container //

    }
}

btn1.addEventListener('click', () => {
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


function getRandomColor() {  // func to generate random RGB values and return it ex- rgb(34,43,44) //
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}