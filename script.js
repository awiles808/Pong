var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;


window.onload = function() {
  alert('Ready To Rumble?');
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
    if(ballX < 0) {
            ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width) {
            ballSpeedX = -ballSpeedX;

          }
}

function drawCanvas() {
    colorRect(0,0,canvas.width,canvas.height,'black');
    colorRect(0,210,10,100,'green');
    colorRect(ballX,100,10,10,'white');

}

function colorRect(leftX,topY, width,height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY, width,height);

}
