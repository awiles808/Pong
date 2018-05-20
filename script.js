let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

//defining scores
let player1Score = 0;
let player2Score = 0;
const winningScore = 5;

//winning screen is false to be hidden untill winning score is reached
let showingWinScreen = false;

//defining paddles height and thickness
let paddle1Y = 250;
let paddle2Y = 250;
const paddleThickness = 10;
const paddleHeight = 100;

//creating mouse movement function.
function calculateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left - root.scrollLeft;
  let mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
          x:mouseX,
          y:mouseY
  };
}


function handleMouseClick(evt) {
          if(showingWinScreen){
            player1Score = 0;
            player2Score = 0;
            showingWinScreen = false;
          }
}

//wait for game to load
window.onload = function() {
  alert('Ready To Rumble?');
    canvas = document.getElementById('pongCanvas');
    canvasContext = canvas.getContext('2d');


//setting speed
    let framesPerSecond = 30
    setInterval(function() {
          moveEverything();
          drawCanvas();

    }, 1000/framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove',
              function(evt){
                      let mousePos = calculateMousePos(evt);
                      paddle1Y = mousePos.y-(paddleHeight/2);


              });
}

function ballReset() {
        if(player1Score >= winningScore ||
           player2Score >= winningScore) {
                  showingWinScreen = true;
           }


        ballSpeedX = -ballSpeedX;
        ballX = canvas.width/2;
        ballY = canvas.height/2;
}

//setting up the AI movement- watches where the ball is accroding to mddle of paddle and moves to keep it in the middle
function computerMovement() {
        var paddle2YCenter = paddle2Y + (paddleHeight/2)
        if(paddle2YCenter < ballY-35) {
                paddle2Y += 6;
        } else if(paddle2YCenter > ballY+35) {
                paddle2Y -= 6;


        }
}

function moveEverything() {
        if(showingWinScreen) {
          return;
        }
    computerMovement();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX < 0) {
      //if the ball is below the paddle and above the paddle|| top+height when crossing the left side, it will flip the horizontal speed other wise it will reset
            if(ballY > paddle1Y &&
               ballY < paddle1Y+paddleHeight) {
                      ballSpeedX = -ballSpeedX;
                      // setting the difference of Y
                      var deltaY = ballY
                              -(paddle1Y+paddleThickness/2);
                      ballSpeedY = deltaY * 0.35;
               } else {
                        player2Score ++; //called before ballReset
                      ballReset();
               }
    }

    if(ballX > canvas.width) {
            if(ballY > paddle2Y &&
              ballY < paddle2Y+paddleHeight) {
                ballSpeedX = -ballSpeedX;
                var deltaY = ballY
                        -(paddle2Y+paddleThickness/2);
                ballSpeedY = deltaY * 0.35;
            } else {
                    player1Score ++; //called before ballReset
                    ballReset();


            }


    }
    if(ballY < 0) {
            ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height) {
            ballSpeedY = -ballSpeedY;

          }
}

//creating function to draw the net with a for loop
function drawNet () {
  //creating for loop to draw net in the canvas from top to bottom every 40 px.
  for(var i=0;i<canvas.height; i+=40) {
          //using colorRect function to draw the lines at half of the canvas's width.
          colorRect(canvas.width/2-1,i,2,20,'green');
  }
}

function drawCanvas() {
  //makes the screen black
    colorRect(0,0,canvas.width,canvas.height,'black');
//creating if statement to show winning screen depending on players score >= winningscore
    if(showingWinScreen) {
            canvasContext.fillStyle = "white";

            if(player1Score >= winningScore){
                      canvasContext.fillText("PLayer 1 WON!", 350,200);

            }else if(player2Score >= winningScore){
                  canvasContext.fillText("Player 2 WON!!", 350,200);
            }


              canvasContext.fillText("Click To Play Again!", 350,500 );
              return;
    }
  //calling the draw net function
    drawNet ();

    //this is player1 leftpaddle, starts at 0, takes grabs the variables that were defined at the top.
    colorRect(0,paddle1Y,paddleThickness,paddleHeight,'white');
    //this is computer rightpaddle
    colorRect(canvas.width -paddleThickness,paddle2Y,
              paddleThickness,paddleHeight,'white');
    //next line draws the ball
    colorCirle(ballX, ballY, 10, 'white')

    //draw scoreboard
    canvasContext.fillText(player1Score, 100,100);
    canvasContext.fillText(player2Score, canvas.width-100,100);

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
