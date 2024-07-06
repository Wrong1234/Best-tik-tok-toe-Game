let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".nw-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let player1 = true;

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],    
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],

];
let play1 = prompt("Enter Name Player 1");
let play2 = prompt("Enter Name Player 2");

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{

        console.log("button was clicked");
        if(player1 === true){
            box.innerText = "O";
            player1 = false;
            box.style.backgroundColor = "LightCoral";
            box.style.color = "white";
        }
        else{
            box.innerText = "X";
            player1 = true;
            box.style.backgroundColor = "#DFFF00";
            box.style.color = "black";
        }
        box.disabled = true;
        checkWinner();
    });

});
const resetGame = () =>{
    player1 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    play1 = prompt("Enter Name Player 1");
    play2 = prompt("Enter Name Player 2");
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white";
        // let play1 = prompt("Enter Name Player 1");
        // let play2 = prompt("Enter Name Player 2");

    }
}
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                let idx = "O";
                if(idx === pos1){
                    console.log("Winner" , play1);
                    showWinner(play1);
                }
                else {
                    console.log("Winner" , play2);
                    showWinner(play2);
                }
            }
        }
    }
};
newGame.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);