const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');

gameGrid.appendChild(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

const handleClick = (e) => {
    userChoice = e.target.id;
    // console.log(userChoice);
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice;
    generateComputerChoice();
    getResult();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    // console.log(computerChoice);
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice;
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i]; // you can delete this id you want to use e.target.HTML in the handleClick
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "YOU WIN!";
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "YOU LOSE!";
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "IT'S A DRAW!";
            break;
    }
}