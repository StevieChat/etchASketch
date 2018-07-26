var mainDiv = document.querySelector('#mainDiv');

function drawInitialGrid(){

    for(var y = 0; y < 16; y++){
        for(var x = 0; x < 16; x++){
            var div = document.createElement('DIV');

            mainDiv.appendChild(div);
            div.className += 'gridSquare'
            div.style.height = (500/16)-2 + "px";
            div.style.width = (500/16)-2 + "px";
        }
    }

}

function getHeight(squares){
    return (500/squares)-2;
}

function getWidth(){
    return (500/squares)-2;
}

drawInitialGrid();

