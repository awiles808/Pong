var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;


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
    ballY = ballY + ballSpeedY;
    if(ballX < 0) {
            ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width) {
            ballSpeedX = -ballSpeedX;

          }
    if(ballY < 0) {
            ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height) {
            ballSpeedY = -ballSpeedY;

          }
}

function drawCanvas() {
  //makes the screen black
    colorRect(0,0,canvas.width,canvas.height,'black');
    //this is player1 paddle
    colorRect(0,210,10,100,'white');
    //next line draws the ball
    colorCirle(ballX, ballY, 10, 'white')

}

function colorCirle(centerX, centerY, radius, drawColor) {

    canvasContext.fillStyle = "drawColor";
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();


}

function colorRect(leftX,topY, width,height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY, width,height);

}
