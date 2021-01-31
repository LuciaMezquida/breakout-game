"use strict";
const grid = document.querySelector(".grid");
const gridStyle = window.getComputedStyle(grid);
const gridWidth = gridStyle.getPropertyValue("width");

const scoreDisplay = document.querySelector(".score");
const blockWidth = 70;
const blockHeight = 16;
const ballDiameter = 20;
const boardWidth = gridWidth.slice(0, gridWidth.length - 2);
const boardHeight = 500;
const userWidth = 120;

let xDirection = 2;
let yDirection = 2;
let score = 0;
let timerInit = 20;

const startUserPossition = [545, 10];
let currentUserPossition = startUserPossition;

const startBallPossition = [600, 40];
let currentBallPossition = startBallPossition;

let timerId;
let timerBall;
