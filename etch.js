var mainDiv = document.querySelector('#mainDiv');

function drawInitialGrid(){

    for(var i = 0; i < 16; i++){
        var div = document.createElement("DIV");

        mainDiv.appendChild(div);
        div.style.backgroundColor = "blue";
        div.style.height = 700/16 + "px";
        div.style.width = 700/16 + "px";
        div.style.display = 'inline-block';
    }

}

drawInitialGrid();

