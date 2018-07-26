var mainDiv = document.querySelector('#mainDiv');
var size = 16;

function drawGrid(size){

    for(var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            var div = document.createElement('DIV');

            mainDiv.appendChild(div);
            div.className += 'gridSquare'
            div.style.height = (500/size)-2 + "px";
            div.style.width = (500/size)-2 + "px";
        }
    }

}

function getHeight(squares){
    return (500/squares)-2;
}

function getWidth(){
    return (500/squares)-2;
}

drawGrid(size);

