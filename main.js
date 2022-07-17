/*




*/

let turn = "X";

function swapTurns() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

let boxOne = document.getElementById("1");

boxOne.addEventListener("click", handleClick);

function handleClick(eventObject) {
  eventObject.target.innerText = "X";
}

let boxTwo = document.getElementById("2");

boxTwo.addEventListener("click", handleClick2);

function handleClick2(eventObject) {
  eventObject.target.innerText = "O";
}
