var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const again_div = document.getElementById("again");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup().fontcolor("green");
    const smallCompWord = "comp".fontsize(3).sup();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord + ". You win!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
    saveData();
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup().fontcolor("green");
    const smallCompWord = "comp".fontsize(3).sup();
    result_div.innerHTML = convertToWord(computerChoice) + smallCompWord + " beats " + convertToWord(userChoice) + smallUserWord + ". You lose!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
    saveData();
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup().fontcolor("green");
    const smallCompWord = "comp".fontsize(3).sup();
    result_div.innerHTML = convertToWord(computerChoice) + smallUserWord + " matches " + convertToWord(userChoice) + smallCompWord + ". It's a draw!";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 300);
    saveData();
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "Let's see who wins!";
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })

    again_div.addEventListener('click', function() {
        again_div.classList.add("white-glow");
        setTimeout(function() {again_div.classList.remove("white-glow")}, 300);
        reset();
    })
}

main();

