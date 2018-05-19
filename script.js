var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;



window.onload = function() {
  // alert('Am I connetected?');
    canvas = document.getElementById('pongCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30
    setInterval(function() {
          moveEverything();
          drawCanvas();
    }, 1000/framesPerSecond);
}


function moveEverything() {
    ballX = ballX + ballSpeedX;
    if(ballX > 800) {
            ballSpeedX = -5;
    }

}

function drawCanvas(){
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(0,210,10,100);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(ballX,100,10,10);


}
