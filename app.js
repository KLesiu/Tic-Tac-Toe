console.log("Hello World");
const container = document.querySelector(".container");
const result = document.querySelector("aside h2");
const showResult = document.querySelector("aside");
const reset = document.querySelector("button");
const playerOneScore = document.querySelector(".player1-score");
const playerTwoScore = document.querySelector(".player2-score");
let scoreOne = 0;
let scoreTwo = 0;
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
    scoreOne += 1;
    container.classList.add("hidden");
    showResult.classList.remove("hidden");
    playerOneScore.innerHTML = `${scoreOne}`;
    result.innerHTML = "<h2>X WINS</h2>";
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
    scoreTwo += 1;
    container.classList.add("hidden");
    showResult.classList.remove("hidden");
    playerTwoScore.innerHTML = `${scoreTwo}`;
    result.innerHTML = "<h2>O WINS</h2>";
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
    container.classList.add("hidden");
    showResult.classList.remove("hidden");
    result.innerHTML = "<h2>Draw</h2>";
  }
};
reset.addEventListener("click", () => {
  xHolder.splice(0, xHolder.length);
  oHolder.splice(0, oHolder.length);
  j = 0;
  k = 0;
  showResult.classList.add("hidden");
  container.classList.remove("hidden");
  for (i = 0; i < gameBoard.length; i++) {
    gameBoard[i].innerHTML = "";
    gameBoard[i].classList.add("empty");
    gameBoard[i].classList.remove("O");
    gameBoard[i].classList.remove("X");
    gameBoard[i].classList.remove("active");
  }
});
renderGameBoard();
