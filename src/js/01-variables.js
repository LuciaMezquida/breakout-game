"use strict";
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const blockWidth = 70;
const blockHeight = 16;
const ballDiameter = 20;
const boardWidth = 1215;
const boardHeight = 500;
const userWidth = 120;

let xDirection = 2;
let yDirection = 2;
let score = 0;

const startUserPossition = [545, 10];
let currentUserPossition = startUserPossition;

const startBallPossition = [600, 40];
let currentBallPossition = startBallPossition;

let timerId;
