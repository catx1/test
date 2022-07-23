console.log("hello")

let turn = "x"


for (let i = 1; i < 10; i++) {

    let box = document.getElementById(`box${[i]}`);

    console.log(box[i])
    
    //box.addEventListener("click", handleClick1)
    
    if (turn === "o") {
    
        box.addEventListener("click", handleClick1)

        } else {

            box.addEventListener("click", handleClick2)
        }

    turn = swapTurns(turn)

    }


function handleClick1(eventObject) {
    eventObject.target.innerText = "o";
}

function handleClick2(eventObject) {
    eventObject.target.innerText = "x";
}

function swapTurns() {
    if (turn == "x") {
        turn = "o";
    } else {
        turn = "x"
    }
}

