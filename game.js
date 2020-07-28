var userScore = 0;
var cpuScore = 0;

const userScore_span = document.getElementById("user_score");
const cpuScore_span = document.getElementById("cpu_score");
const scoreBord_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCpuChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function convert(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";
}

function win(user, cpu) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convert(user) + " beats " + convert(cpu) + ". You Win!";
    // document.getElementById(user).classList.add('green-glow');
}

function lose(user, cpu) {
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = convert(user) + " beats " + convert(cpu) + ". You Lose!";
}

function Draw(user, cpu) {
    result_div.innerHTML = convert(user) + " is same as " + convert(cpu) + ". Its a Draw!";
}



function game (userChoice) {
    const cpuChoice = getCpuChoice();
    
    switch (userChoice+cpuChoice) {      
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, cpuChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, cpuChoice);           
            break;
        case "ss":
        case "rr":
        case "pp":
            Draw(userChoice, cpuChoice);
            break;
    }
};

function main() {
    rock_div.addEventListener('click', function(){
    game("r"); 
    })

    paper_div.addEventListener('click', function(){
    game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();