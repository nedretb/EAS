let grid = document.getElementById("container");
let gridSize = document.getElementById("grid-size");
let clear = document.getElementById("clear");
let blackColor = document.getElementById("black");
let sprayColor = document.getElementById("spray");
let randomColor = document.getElementById("random");
let mode = "basic";

gridSize.addEventListener('change', clearBox);
clear.addEventListener('click', clearBox);
blackColor.addEventListener('click', () =>{
    mode = "basic";
});
sprayColor.addEventListener('click', () => {
    mode = "spray";
});
randomColor.addEventListener('click', () =>{
    mode = "random";
})

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
        event.target.style.backgroundColor = chooseColor();
        function chooseColor(){
            let color = ""
            if (mode == "basic"){
                color = "black";
            }
            else if (mode == "spray"){
                let shade = event.target.style.backgroundColor;
                if(shade==""){
                    shade = "rgba(0, 0, 0, 0)"
                }
                let current = shade.split(', ');
                current[3] = parseFloat(current[3]);
                current[3] += 0.2;
                color = current.join(', ');
                color = color + ")";
            }
            else if (mode == "random"){
                color = "rgb( " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
            }
            return color;
        }
        
    }))
}


function clearBox(){
    let boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(boxes => boxes.remove());
    createGrid(gridSize.value);
    colorBox();
}

clearBox();
