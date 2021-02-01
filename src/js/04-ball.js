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

timerId = setInterval(moveBall, timerInit);

const increaseTimerInit = () => {
  if (score % 5 === 0 && score !== 0) {
    timerInit -= 1;
    clearInterval(timerId);
    timerId = setInterval(moveBall, timerInit);
  }
};
