"use strict";
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 550;
const boardHeight = 300;

let xDirection = 2;
let yDirection = 2;
let score = 0;

const startUserPossition = [230, 10];
let currentUserPossition = startUserPossition;

const startBallPossition = [270, 40];
let currentBallPossition = startBallPossition;

let timerId;

///////--BLOCKS--///////

//create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//draw all my block
const addBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
};
addBlocks();

///////--USER--///////

//draw the user
const drawUser = () => {
  user.style.left = currentUserPossition[0] + "px";
  user.style.bottom = currentUserPossition[1] + "px";
};

//add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

//move user
const moveUser = (ev) => {
  switch (ev.key) {
    case "ArrowLeft":
      if (currentUserPossition[0] > 10) {
        currentUserPossition[0] -= 20;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentUserPossition[0] < boardWidth - blockWidth) {
        currentUserPossition[0] += 20;
        drawUser();
      }
      break;
  }
};
document.addEventListener("keydown", moveUser);

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

//////--CHECK FOR COLLISIONS--///////
const checkForCollisions = () => {
  //check for block collisions
  for (let i = 0; i < blocks.length; i++) {
    if (
      currentBallPossition[0] > blocks[i].bottomLeft[0] &&
      currentBallPossition[0] < blocks[i].bottomRight[0] &&
      currentBallPossition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      currentBallPossition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = document.querySelectorAll(".block");
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      score++;
      scoreDisplay.innerHTML = score;

      //check for win
      if (blocks.length === 0) {
        scoreDisplay.innerHTML = "YOU WIN!!!";
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
      }
    }
  }
  //check for user collisions
  if (
    currentBallPossition[0] > currentUserPossition[0] &&
    currentBallPossition[0] < currentUserPossition[0] + blockWidth &&
    currentBallPossition[1] > currentUserPossition[1] &&
    currentBallPossition[1] < currentUserPossition[1] + blockHeight
  ) {
    changeDirection();
  }
  //check for wall collisions
  if (
    currentBallPossition[0] >= boardWidth - ballDiameter ||
    currentBallPossition[1] >= boardHeight - ballDiameter ||
    currentBallPossition[0] <= 0
  ) {
    changeDirection();
  }
  //check for game over
  if (currentBallPossition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "LOOOOSER!!!!";
    document.removeEventListener("keydown", moveUser);
  }
};
const changeDirection = () => {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
};
