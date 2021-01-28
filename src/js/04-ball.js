///////--BALL--///////

//draw the ball
const drawBall = () => {
  ball.style.left = currentBallPossition[0] + "px";
  ball.style.bottom = currentBallPossition[1] + "px";
};

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move ball
const moveBall = () => {
  currentBallPossition[0] += xDirection;
  currentBallPossition[1] += yDirection;
  drawBall();
  checkForCollisions();
};
timerId = setInterval(moveBall, 30);
