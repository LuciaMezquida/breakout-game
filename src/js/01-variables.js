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
