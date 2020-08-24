let grid = document.getElementById("container");
let gridSize = document.getElementById("grid-size");
let clear = document.getElementById("clear");
let changeColors = document.getElementById("change-colors");
let colorSelector = 0;

gridSize.addEventListener('change', clearBox);
clear.addEventListener('click', clearBox);
//changeColors.addEventListener('click', colorSelector());

function createGrid(size){
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    
    for( let i = 0; i < size*size; i++){
        let cell = document.createElement('div');
        cell.innerText = " ";
        grid.appendChild(cell).className = "grid-box";
    }
}

function colorBox(){
    let box = document.querySelectorAll('.grid-box');
    box.forEach(box => box.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = "black";
    }))
}

function clearBox(){
    let boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(boxes => boxes.remove());
    createGrid(gridSize.value);
    colorBox();
}

clearBox();
