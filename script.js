var canvas;
var canvasContext;



window.onload = function() {
  // alert('Am I connetected?');
  canvas = document.getElementById('pongCanvas');
  canvasContext = canvas.getContext('2d');
  drawCanvas();
  drawCanvas();
  drawCanvas();
}
function drawCanvas(){
  console.log('called drawCanvas()?!');
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(225,210,200,200);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(canvas.width/2,200,50,25);


}
