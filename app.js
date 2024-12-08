let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-button");
let result = document.querySelector(".result");

let TurnO = true;

let winPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("btn was clicked");
    if (TurnO) {
      box.innerText = "O";
      TurnO = false;
      //   box.removeEventListener("click");
    } else {
      box.innerText = "X";
      TurnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    TurnO = true;
    box.disabled = false;
    result.innerText = "";
  });
});
const checkWinner = () => {
  winPosition.forEach((pattern) => {
    if (
      boxes[pattern[0]].innerText == "O" &&
      boxes[pattern[1]].innerText == "O" &&
      boxes[pattern[2]].innerText == "O"
    ) {
      console.log("O wins");
      result.innerText = "O wins";
      boxes.forEach((box) => {
        box.disabled = true;
      });
    } else if (
      boxes[pattern[0]].innerText == "X" &&
      boxes[pattern[1]].innerText == "X" &&
      boxes[pattern[2]].innerText == "X"
    ) {
      console.log("X wins");
      result.innerText = "X wins";

      boxes.forEach((box) => {
        box.disabled = true;
      });
    } else {
    }
  });
};
