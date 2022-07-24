
let turn = "x"

win = false
//winCombo = false

document.getElementById("headerbanner").innerHTML = "press a box to start";

do {
    for (let i = 1; i < 10; i++) {

        let box = document.getElementById(`box${[i]}`);
        box.addEventListener("click", handleClick)

        }


    function handleClick(eventObject) {
        let id = eventObject.target.id;
        console.log(id)
        let box = eventObject.target;

        box.innerText = turn;
        swapTurns()
        checkWin()
        //checkCombinations()
    }
}
while (win = false);

function swapTurns() {
    if (turn == "x") {
        turn = "o";
        document.getElementById("headerbanner").innerHTML = "player o's turn";
    } else {
        turn = "x"
        document.getElementById("headerbanner").innerHTML = "player x's turn";
    }
}

//function checkCombinations(winCombo) {
    //return 
let combination1 = false
if (document.getElementById("box1").value === document.getElementById("box2").value === document.getElementById("box3").value) {
    combination1 = true
}

let combination2 = false
if (document.getElementById("box4").value === document.getElementById("box5").value === document.getElementById("box6").value) {
    combination2 = true
}

let combination3 = false
if (document.getElementById("box7").value === document.getElementById("box8").value === document.getElementById("box9").value) {
    combination3 = true 
}

let combination4 = false
if (document.getElementById("box1").value === document.getElementById("box4").value === document.getElementById("box7").value) {
combination4 = true
}

let combination5 = false
if (document.getElementById("box2").value === document.getElementById("box5").value === document.getElementById("box8").value) {
    combination5 = true
}

let combination6 = false
if (document.getElementById("box3").value === document.getElementById("box6").value === document.getElementById("box9").value) {
    combination6 = true
}

let combination7 = false
if (document.getElementById("box1").value === document.getElementById("box5").value === document.getElementById("box9").value) {
    combination7 = true
}

let combination8 = false
if (document.getElementById("box3").value === document.getElementById("box5").value === document.getElementById("box7").value) {
    combination8 = true
}



function checkWin() {
    if (combination1 || combination2 || combination3 || combination4 ||combination5 || combination6 || combination7 || combination8) {
        win = true
        console.log(win)
    }
} 
    

if (win = true) {
    document.getElementById("headerbanner").innerHTML = "you won!";
}