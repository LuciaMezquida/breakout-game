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
