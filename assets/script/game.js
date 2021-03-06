let player = 0;
let symbols = ["shiba", "doge"];
let board = ["","","","","","","","",""];
let gameOver = false;

let state = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function toMove(id){
    let aux = document.getElementById(`${id}`);
    if(gameOver == true){
        return;
    }
    if(aux.getAttribute("used") == " "){
        if(gameOver == false){
            if(player == 0) {
                player = 1;
            }
            else {
                player = 0;
            }
            let imagem = document.createElement("img");
            imagem.classList.add("select");
            imagem.src = "./assets/img/"+symbols[player]+".png";
            aux.appendChild(imagem);
            aux.setAttribute("used", "yes");
            aux.setAttribute("player", `${player}`);
            board[aux.id] = symbols[player];
            gameOver = isWin();
        }
    }  
}

function isWin(){

    for(let i = 0; i < state.length; i++){
        let seq = state[i];
        let pos1 =  seq[0];
        let pos2 =  seq[1];
        let pos3 =  seq[2];
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            let finalbox = document.getElementById("finalbox");
            finalbox.style.display = "flex";
            let msg = document.getElementById("mensage");
            msg.innerText = `${board[pos1]} wins!`;
            return true;
        } 
    }
    let draw=0;
    for(let j=0; j < board.length; j++){
        if(board[j] == "shiba" || board[j] == "doge"){
            draw++;
        }
    }
    if(draw == 9){
        let finalbox = document.getElementById("finalbox");
        let msg = document.getElementById("mensage");
        finalbox.style.display = "flex";
        msg.innerText = `draw`;
        return true;
    }
        return false;
}