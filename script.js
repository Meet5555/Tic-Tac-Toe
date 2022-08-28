console.log('Welcome to Tic Tac Toe');
let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let winmusic = new Audio("win.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";
let count= 0;

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function for Win
const checkWin = () => {
    let wins = [
        [0, 1, 2, 0, 4, 0],
        [3, 4, 5, 0, 12, 0],
        [6, 7, 8, 0, 20, 0],
        [0, 3, 6, -8, 12, 90],
        [1, 4, 7, 0, 12, 90],
        [2, 5, 8, 8, 12, 90],
        [0, 4, 8, 0, 12, 45],
        [2, 4, 6, 0, 12, 135],
    ]
    wins.forEach(e => {
        let boxtext = document.getElementsByClassName("boxtext");
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText != "")) {
            count =0;
            document.querySelector("#info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            winmusic.play();
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "24vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            setTimeout(() => {
                resetFunc();
            }, 4000);
        }
        
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        count = count + 1;
        if (boxtext.innerHTML === "") {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            turnmusic.play();
            checkWin();
            if (!isgameover) {
                document.getElementById("info").innerText = "Turn for " + turn;
            }
        }
        if(count==9){
            document.getElementById("info").innerText = "It's Tie";
            setTimeout(() => {
                resetFunc();
            }, 4000);
        }
    })
})

//Reset Logic
let reset = document.getElementById("reset");
reset.addEventListener('click', resetFunc);
function resetFunc(){
    count=0;
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
        turn = "X";
        isgameover = false;
        document.getElementById("info").innerText = "Turn for " + turn;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector(".line").style.width = "0vw";
        document.querySelector(".line").style.transform = `translate(0vw,0vw) rotate(0deg)`;
    })
}