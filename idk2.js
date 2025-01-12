


let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses:  0,
    ties:  0
};
scoredisplay();
let userMove = ' ';
let computerMove1 = ' ';

function scoredisplay(){
    const hehe = document.querySelector('.score2');
    hehe.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
}
function rock() {
    userMove = 'rock';
    computerMove();
    ans();
}
function paper() {
    userMove = 'paper';
    computerMove();
    ans();
}
function scissors() {
    userMove = 'scissors';
    computerMove();
    ans();
}
function computerMove (){
    let randomNumber = Math.random();
    if (randomNumber >=0 && randomNumber< (1/3)){
        computerMove1 = 'rock';
    }
    else if(randomNumber>= (1/3) && randomNumber < (2/3)){
        computerMove1 = 'paper';

    }
    else {
        computerMove1 = 'scissors';
    }
}
function ans () {
    let userImage = ' ';
    let computerImage = ' ';
    if(userMove === 'rock'){
        userImage = '<img class = "rock-img" src = "/home/troyy/Downloads/troyy/javascript/images/rock-emoji.png">';
    }
    else if(userMove === 'paper'){
        userImage = '<img class = "paper-img" src = "/home/troyy/Downloads/troyy/javascript/images/paper-emoji.png">';
    }
    else if (userMove === 'scissors'){
        userImage = '<img class = "scissor-img" src = "/home/troyy/Downloads/troyy/javascript/images/scissors-emoji.png">';
    }

    if(computerMove1 === 'rock'){
        computerImage = '<img class = "rock-img" src = "/home/troyy/Downloads/troyy/javascript/images/rock-emoji.png">';
    }
    else if (computerMove1 === 'paper'){
        computerImage = '<img class = "paper-img" src = "/home/troyy/Downloads/troyy/javascript/images/paper-emoji.png">';
    }
    else if (computerMove1 === 'scissors'){
        computerImage = '<img class = "scissor-img" src = "/home/troyy/Downloads/troyy/javascript/images/scissors-emoji.png">';
    }
    if(userMove === computerMove1){
        score.ties = score.ties+1;
        const aElement = document.querySelector('.result');
        aElement.innerHTML = 'Tie.';
        const bElement = document.querySelector('.moves');
        bElement.innerHTML = `You ${userImage}  ${computerImage} Computer`;
        const cElement = document.querySelector('.score2');
        cElement.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
    }
    else if(
        (userMove === 'rock' && computerMove1 === 'scissors') || 
        (userMove === 'paper' && computerMove1 === 'rock') ||
        (userMove === 'scissors' && computerMove1 === 'paper')
    ){
        score.wins = score.wins+1;
        const aElement = document.querySelector('.result');
        aElement.innerHTML = 'You Win.';
        const bElement = document.querySelector('.moves');
        bElement.innerHTML = `You ${userImage}  ${computerImage} Computer`;
        const cElement = document.querySelector('.score2');
        cElement.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
    }
    else {
        score.loses = score.loses+1;
        const aElement = document.querySelector('.result');
        aElement.innerHTML = 'You Lose.';
        const bElement = document.querySelector('.moves');
        bElement.innerHTML = `You ${userImage}  ${computerImage} Computer`;
        const cElement = document.querySelector('.score2');
        cElement.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function reset1 () {
    localStorage.removeItem('score');
    score = {
        wins: 0,
        loses: 0,
        ties: 0

    };
    const cElement = document.querySelector('.score2');
    cElement.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
    const bElement = document.querySelector('.moves');
    bElement.innerHTML = ' ';
    localStorage.setItem('score', JSON.stringify(score));
}