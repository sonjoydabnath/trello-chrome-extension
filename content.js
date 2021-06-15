function fixMargin() {
  var board = document.getElementById("board");

  if (
    board &&
    board.classList &&
    !board.classList.contains("trello-margin-bottom-zero")
  ) {
    board.classList.add("trello-margin-bottom-zero");
  }
}

function fixMenuButton() {
  var buttons = document.getElementsByClassName("board-header-btn-text");
  for (let i = 0; i < buttons.length; i++) {
    var button = buttons.item(i);
    if (button && button.textContent === "Show menu") {
      if (
        button.classList &&
        !button.classList.contains("trello-hidden-span")
      ) {
        button.classList.add("trello-hidden-span");
      }
    }
  }
}

window.addEventListener("load", (e) => {
  fixMargin();
  fixMenuButton();
});
