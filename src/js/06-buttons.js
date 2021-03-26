buttonPlay.addEventListener("click", () => {
  location.reload();
});

if (boardWidth <= 1024) {
  instructions.classList.add("hide");
  touchButtons.forEach((btn) => btn.classList.remove("hide"));
}

touchButtons.forEach((btn) =>
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (ev.target.value === "left") {
      currentUserPossition[0] -= 20;
      drawUser();
    }
    if (ev.target.value === "right") {
      currentUserPossition[0] += 20;
      drawUser();
    }
  })
);
