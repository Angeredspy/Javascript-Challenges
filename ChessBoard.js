/*
    Write a program which creates a string that is 
    representative of an 8x8 grid, using newlines 
    to separate each line. At each position of the 
    grid, there is either a space or a '#' character.
*/  

let gridSize = 8; 
let grid = ''; 

for (let x = 0; x < gridSize; x++){
    for (let y = 0; y < gridSize; y++){
        if ((x+y) % 2 === 0) {
            grid += ' '
        } else {
            grid += '#'
        }
    }
    grid += '\n';
} 

console.log(grid);