let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll("square");
  squares.forEach((square) => square.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("square");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(size) {
  if (size >= 2 && size <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(size);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let squares = document.querySelectorAll("square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

populateBoard(16);

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
