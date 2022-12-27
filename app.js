console.log("Hello World");
const container = document.querySelector(".container");
let gameBoard = [];
const renderGameBoard = () => {
  for (i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    gameBoard.push(div);
    container.appendChild(div);
    gameBoard[i].addEventListener("click", (e) => {
      e.target.innerHTML = "X";
    });
  }
};

renderGameBoard();
