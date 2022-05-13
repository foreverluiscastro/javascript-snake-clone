const snake = document.getElementById("snake");
let intervalID;

function animateSnake() {

}


function moveSnakeLeft() {
  const leftNumbers = snake.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    snake.style.left = `${left - 10}px`;
  }
}

function moveSnakeRight() {
  const rightNumbers = snake.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if (right < 380) {
    snake.style.left = `${right + 10}px`;
  }
}

function moveSnakeUp() {
  const upNumbers = snake.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up < 380) {
    snake.style.bottom = `${up + 10}px`;
  }
}

function moveSnakeDown() {
  const downNumbers = snake.style.bottom.replace("px", "");
  const down = parseInt(downNumbers, 10);

  if (down > 0) {
    snake.style.bottom = `${down - 10}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    clearInterval(intervalID)
    moveSnakeLeft();
    intervalID = setInterval(moveSnakeLeft, 100)
  } else if (e.key === "ArrowRight") {
    clearInterval(intervalID)
    moveSnakeRight();
    intervalID = setInterval(moveSnakeRight, 100)
  } else if (e.key === "ArrowUp") {
    clearInterval(intervalID)
    moveSnakeUp();
    intervalID = setInterval(moveSnakeUp, 100)
  } else if (e.key === "ArrowDown") {
    clearInterval(intervalID)
    moveSnakeDown();
    intervalID = setInterval(moveSnakeDown, 100)
  }
});
