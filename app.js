console.log("Hello World");
const container = document.querySelector(".container");
let gameBoard = [];
let xHolder = [];
let oHolder = [];
let j = 0;
let k = 0;
const renderGameBoard = () => {
  for (i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.classList.add("empty");
    gameBoard.push(div);
    container.appendChild(div);
    gameBoard[i].addEventListener("click", (e) => {
      if (
        xHolder.length <= oHolder.length &&
        e.target.classList.contains("empty")
      ) {
        e.target.classList.remove("empty");
        e.target.classList.add("active");
        e.target.classList.add("X");
        j++;
        xHolder.push(e.target);
        xHolder[j - 1].innerHTML = "X";
        winner();
      } else if (e.target.classList.contains("empty")) {
        e.target.classList.remove("empty");
        e.target.classList.add("active");
        e.target.classList.add("O");
        k++;
        oHolder.push(e.target);
        oHolder[k - 1].innerHTML = "O";
        winner();
      } else {
        alert("Pick other position");
      }
    });
  }
};
const winner = () => {
  if (
    (gameBoard[0].classList.contains("X") &&
      gameBoard[1].classList.contains("X") &&
      gameBoard[2].classList.contains("X")) ||
    (gameBoard[0].classList.contains("X") &&
      gameBoard[3].classList.contains("X") &&
      gameBoard[6].classList.contains("X")) ||
    (gameBoard[0].classList.contains("X") &&
      gameBoard[4].classList.contains("X") &&
      gameBoard[8].classList.contains("X")) ||
    (gameBoard[6].classList.contains("X") &&
      gameBoard[7].classList.contains("X") &&
      gameBoard[8].classList.contains("X")) ||
    (gameBoard[2].classList.contains("X") &&
      gameBoard[4].classList.contains("X") &&
      gameBoard[6].classList.contains("X")) ||
    (gameBoard[3].classList.contains("X") &&
      gameBoard[4].classList.contains("X") &&
      gameBoard[5].classList.contains("X")) ||
    (gameBoard[1].classList.contains("X") &&
      gameBoard[4].classList.contains("X") &&
      gameBoard[7].classList.contains("X")) ||
    (gameBoard[2].classList.contains("X") &&
      gameBoard[5].classList.contains("X") &&
      gameBoard[8].classList.contains("X"))
  ) {
    console.log("X WINS");
  } else if (
    (gameBoard[0].classList.contains("O") &&
      gameBoard[1].classList.contains("O") &&
      gameBoard[2].classList.contains("O")) ||
    (gameBoard[0].classList.contains("O") &&
      gameBoard[3].classList.contains("O") &&
      gameBoard[6].classList.contains("O")) ||
    (gameBoard[0].classList.contains("O") &&
      gameBoard[4].classList.contains("O") &&
      gameBoard[8].classList.contains("O")) ||
    (gameBoard[6].classList.contains("O") &&
      gameBoard[7].classList.contains("O") &&
      gameBoard[8].classList.contains("O")) ||
    (gameBoard[2].classList.contains("O") &&
      gameBoard[4].classList.contains("O") &&
      gameBoard[6].classList.contains("O")) ||
    (gameBoard[3].classList.contains("O") &&
      gameBoard[4].classList.contains("O") &&
      gameBoard[5].classList.contains("O")) ||
    (gameBoard[1].classList.contains("O") &&
      gameBoard[4].classList.contains("O") &&
      gameBoard[7].classList.contains("O")) ||
    (gameBoard[2].classList.contains("O") &&
      gameBoard[5].classList.contains("O") &&
      gameBoard[8].classList.contains("O"))
  ) {
    console.log("O WINS");
  } else if (
    gameBoard[0].classList.contains("active") &&
    gameBoard[1].classList.contains("active") &&
    gameBoard[2].classList.contains("active") &&
    gameBoard[3].classList.contains("active") &&
    gameBoard[4].classList.contains("active") &&
    gameBoard[6].classList.contains("active") &&
    gameBoard[7].classList.contains("active") &&
    gameBoard[8].classList.contains("active")
  ) {
    console.log("DRAW");
  }
};
renderGameBoard();
