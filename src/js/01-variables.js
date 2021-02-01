"use strict";
const grid = document.querySelector(".grid");
const gridStyle = window.getComputedStyle(grid);
const gridWidth = gridStyle.getPropertyValue("width");

const scoreDisplay = document.querySelector(".score");
const buttonPlay = document.querySelector(".play");
const blockWidth = 70;
const blockHeight = 16;
const ballDiameter = 20;
const boardWidth = gridWidth.slice(0, gridWidth.length - 2);
const boardHeight = 500;
const userWidth = 120;

let xDirection = 2;
let yDirection = 2;
let score = 0;
let timerInit = 25;

const startUserPossition = [boardWidth - boardWidth / 2 - 60, 10];
let currentUserPossition = startUserPossition;

const startBallPossition = [boardWidth - boardWidth / 2, 40];
let currentBallPossition = startBallPossition;

let timerId;

buttonPlay.addEventListener("click", () => {
  location.reload();
});
