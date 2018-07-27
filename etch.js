var mainDiv = document.querySelector('#mainDiv');
var resetBtn = document.querySelector('#resetBtn');
var size = 16;

document.addEventListener('mouseover', changeColor, false);
resetBtn.addEventListener('click', resetGrid, false);

function drawGrid(size){

    var height = getHeight(size);
    var width = getWidth(size);

    for(var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            var div = document.createElement('DIV');

            mainDiv.appendChild(div);
            div.className += 'gridSquare'
            div.style.height = height + 'px';
            div.style.width = width + 'px';
        }
    }
}

function changeColor(e){
    if(e.target.classList.contains('gridSquare')){
        e.target.style.backgroundColor = "#D3D3D3";
    }
}

function resetGrid(){
    size = prompt("How many squares would you like on each side of the grid?");
    clearGrid();
    drawGrid(size);
}

function clearGrid(){
    var cNode = mainDiv.firstChild;

    while(cNode){
        mainDiv.removeChild(cNode);
        cNode = mainDiv.firstChild;
    }
}

function getHeight(squares){return (650/squares)-.5;}
function getWidth(squares){return (650/squares)-.5;}

drawGrid(size);

