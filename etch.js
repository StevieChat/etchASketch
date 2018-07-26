var mainDiv = document.querySelector('#mainDiv');
var size = 16;
var height = getHeight(size);
var width = getWidth(size);

function drawGrid(size){

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

function getHeight(squares){
     return (500/squares)-2;
}

function getWidth(squares){
    return (500/squares)-2;
}

drawGrid(size);

