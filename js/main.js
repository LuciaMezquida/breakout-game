"use strict";
const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const startUserPossition = [230, 10];
let currentUserPossition = startUserPossition;

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
      currentUserPossition[0] -= 20;
      drawUser();
      break;
    case "ArrowRight":
      currentUserPossition[0] += 20;
      drawUser();
      break;
    default:
      break;
  }
};

document.addEventListener("keydown", moveUser);
