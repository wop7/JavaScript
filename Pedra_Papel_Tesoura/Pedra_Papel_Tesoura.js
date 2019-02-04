let usuarioScore = 0;
let machineScore = 0;
const usuarioScore_span = document.getElementById("user-score");
const machineScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertToWord(letra){
    if (letra === "r") return "Pedra";
    if (letra === "p") return "Papel";
    return "Tesoura";
}

function Win(user, computer){
    usuarioScore++;
    usuarioScore_span.innerHTML = usuarioScore;
    machineScore_span.innerHTML = machineScore;
    const smallUserWord = "usuário".fontsize(3).sub();
    const smallComputerWord = "machine".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} vence ${convertToWord(computer)}${smallComputerWord}. Voce venceu!!!`;
}

function Lose(user, computer){
    machineScore++;
    usuarioScore_span.innerHTML = usuarioScore;
    machineScore_span.innerHTML = machineScore;
    const smallUserWord = "usuário".fontsize(3).sub();
    const smallComputerWord = "machine".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} não vence ${convertToWord(computer)}${smallComputerWord}. Voce perdeu!!!`;
}

function Empate(user, computer){
    usuarioScore_span.innerHTML = usuarioScore;
    machineScore_span.innerHTML = machineScore;
    const smallUserWord = "usuário".fontsize(3).sub();
    const smallComputerWord = "machine".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} igual ${convertToWord(computer)}${smallComputerWord}.  ninguem venceu!!!`;
}


console.log(getComputerChoice());


function Game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            Win(userChoice, computerChoice);
            console.log("Usuario venceu");
            break;
        case "sr":
        case "rp":
        case "ps":
             Lose(userChoice, computerChoice);
             console.log("Usuario perdeu");
            break;
        case "rr":
        case "pp":
        case "ss":
             Empate(userChoice, computerChoice);
             console.log("Empate");
            break;
    }
}


function main(){

    rock_div.addEventListener('click', function(){
        Game("r");
    })
    
    paper_div.addEventListener('click', function(){
        Game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        Game("s");
    })

}


main();



