var mainDiv = document.querySelector('#mainDiv');
var size = 16;


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
            div.addEventListener('mouseleave', () => {
                div.style.backgroundColor = 'lightgray';
            });
        }
    }
}



function getHeight(squares){
     return (650/squares)-.5;
}

function getWidth(squares){
    return (650/squares)-.5;
}

drawGrid(size);

