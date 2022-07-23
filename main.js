console.log("hello");

let turn = "x";

for (let i = 1; i < 10; i++) {
  let box = document.getElementById(`box${[i]}`);
  console.log(box[i]);

  box.addEventListener("click", handleClick);
}

// let container = document.getElementById("flexbox-container");

// container.addEventListener("click", handleClickDemo);

// function handleClickDemo(eventObject) {
//   let id = eventObject.target.id;
//   let box = eventObject.target;

//   box.innerText = turn;
//   swapTurns();
// }

function handleClick(eventObject) {
  let id = eventObject.target.id;
  let box = eventObject.target;

  box.innerText = turn;
  swapTurns();
}

function swapTurns() {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
}

function onWin() {
  document.body.style.backgroundColor = "red";
}
