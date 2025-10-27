const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#para");
const winContainer = document.querySelector(".winer");
const newBtn = document.querySelector(".new-btn");
const reset = document.querySelector(".reset");
const container =document.querySelector(".container")

turnO = true;
let winDigit = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let re_set = () => {
  enable();
  winContainer.classList.add("hide");
};

let enable = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
let disable = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

let showWinner = (winner) => {
  msg.innerText = `Congratulation, The Winner is "${winner}"`;
  winContainer.classList.remove("hide");
  disable();
};

let checkWinner = () => {
  for (let pattern of winDigit) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
reset.addEventListener("click", re_set);
newBtn.addEventListener("click", re_set);
