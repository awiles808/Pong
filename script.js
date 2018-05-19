var canvas;
var canvasContext;
var ballX = 50;
var ballY;


window.onload = function() {
  // alert('Am I connetected?');
  canvas = document.getElementById('pongCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(drawCanvas, 50);
  drawCanvas();
  drawCanvas();
  drawCanvas();
}
function drawCanvas(){
ballX = ballX + 5;

  console.log(ballX);
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(225,210,200,200);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(ballX,100,10,10);


}
