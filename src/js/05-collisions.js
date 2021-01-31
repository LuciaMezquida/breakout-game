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
        clearInterval(timerBall);
        document.removeEventListener("keydown", moveUser);
      }
    }
  }
  //check for user collisions
  if (
    currentBallPossition[0] > currentUserPossition[0] &&
    currentBallPossition[0] < currentUserPossition[0] + userWidth &&
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
    clearInterval(timerBall);
    scoreDisplay.innerHTML = "LOOOOSER!!!!";
    buttonPlay.classList.remove("hide");
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
