
let turn = "x"

let win = false

document.getElementById("headerbanner").innerHTML = "click a box to start";


for (let i = 1; i < 10; i++) {

    let box = document.getElementById(`box${[i]}`);
    box.addEventListener("click", handleClick)

    }


function handleClick(eventObject) {
    let id = eventObject.target.id;
    let box = eventObject.target;

    box.innerText = turn;
    swapTurns()
    checkCombinations()
    checkWin()
}


// swaps turns
function swapTurns() {
    if (turn == "x") {
        turn = "o";
        document.getElementById("headerbanner").innerText = "player o's turn";
    } else {
        turn = "x"
        document.getElementById("headerbanner").innerText = "player x's turn";
    }
}

let [
    combination1,
    combination2,
    combination3,
    combination4,
    combination5,
    combination6,
    combination7,
    combination8,
  ] = [false, false, false, false, false, false, false, false];
  

  // checks if any combinations are true
function checkCombinations() {
    if (
      document.getElementById("box1").innerText ===
        document.getElementById("box2").innerText &&
      document.getElementById("box2").innerText ===
        document.getElementById("box3").innerText  &&
        document.getElementById("box1").innerText != "" &&
        document.getElementById("box2").innerText != "" &&
        document.getElementById("box3").innerText != ""  
    ) {
      combination1 = true;
    }
  
    if (
      document.getElementById("box4").innerText ===
        document.getElementById("box5").innerText &&
      document.getElementById("box5").innerText ===
        document.getElementById("box6").innerText && 
        document.getElementById("box4").innerText != "" &&
        document.getElementById("box5").innerText != "" &&
        document.getElementById("box6").innerText != ""  
    ) {
      combination2 = true;
    }
  
    if (
      document.getElementById("box7").innerText ===
        document.getElementById("box8").innerText &&
      document.getElementById("box8").innerText ===
        document.getElementById("box9").innerText && 
        document.getElementById("box7").innerText != "" &&
        document.getElementById("box8").innerText != "" &&
        document.getElementById("box9").innerText != ""  
    ) {
      combination3 = true;
    }
  
    if (
        document.getElementById("box2").innerText ===
          document.getElementById("box5").innerText &&
        document.getElementById("box5").innerText ===
          document.getElementById("box8").innerText && 
          document.getElementById("box2").innerText != "" &&
          document.getElementById("box5").innerText != "" &&
          document.getElementById("box8").innerText != "" 
      
      ) {
        combination4 = true;
      }

    if (
      document.getElementById("box1").innerText ===
        document.getElementById("box4").innerText &&
      document.getElementById("box4").innerText ===
        document.getElementById("box7").innerText && 
        document.getElementById("box1").innerText != "" &&
        document.getElementById("box4").innerText != "" &&
        document.getElementById("box7").innerText != "" 
    
    ) {
      combination5 = true;
    }
  
    if (
      document.getElementById("box3").innerText ===
        document.getElementById("box6").innerText &&
      document.getElementById("box6").innerText ===
        document.getElementById("box9").innerText && 
        document.getElementById("box3").innerText != "" &&
        document.getElementById("box6").innerText != "" &&
        document.getElementById("box9").innerText != ""  
    ) {
      combination6 = true;
    }
  
    if (
      document.getElementById("box1").innerText ===
        document.getElementById("box5").innerText &&
      document.getElementById("box5").innerText ===
        document.getElementById("box9").innerText && 
        document.getElementById("box1").innerText != "" &&
        document.getElementById("box5").innerText != "" &&
        document.getElementById("box9").innerText != ""  
    ) {
      combination7 = true;
    } 
    
  
    if (
      document.getElementById("box3").innerText ===
        document.getElementById("box5").innerText &&
      document.getElementById("box5").innerText ===
        document.getElementById("box7").innerText && 
        document.getElementById("box3").innerText != "" &&
        document.getElementById("box5").innerText != "" &&
        document.getElementById("box7").innerText != ""  
    ) {
      combination8 = true;
    }
  }



  // checks if player has won + displays result
function checkWin() {
    if (
        combination1 || 
        combination2 || 
        combination3 || 
        combination4 ||
        combination5 || 
        combination6 || 
        combination7 || 
        combination8
    ) {
        win = true
        console.log("done")

        // display winner 
        if (turn === "x") {
            turn = "o"
        } else {
            turn = "x";
        }
        document.getElementById("headerbanner").innerText = "player "+turn+" has won!";
        document.body.style.backgroundColor = "red"

        // remove ability to click
        for (let i = 1; i < 10; i++) {

            let box = document.getElementById(`box${[i]}`);
            box.removeEventListener("click", handleClick)
        
            }
        
    } else if  (
        document.getElementById("box1").innerText != "" &&
        document.getElementById("box2").innerText != "" &&
        document.getElementById("box3").innerText != "" &&
        document.getElementById("box4").innerText != "" &&
        document.getElementById("box5").innerText != "" &&
        document.getElementById("box6").innerText != "" &&
        document.getElementById("box7").innerText != "" &&
        document.getElementById("box8").innerText != "" &&
        document.getElementById("box9").innerText != "" 
    )  {
        for (let i = 1; i < 10; i++) {

            let box = document.getElementById(`box${[i]}`);
            box.removeEventListener("click", handleClick)
        document.getElementById("headerbanner").innerHTML = "it's a draw!";

    }

    }else {
        console.log("not done")
    }
} 
    

// button to start new game 
const button = document.querySelector("button")
button.onclick = () => {
    window.location.reload();
}

