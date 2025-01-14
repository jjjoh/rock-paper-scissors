

let computerChoice = "not decided yet";
let humanChoice = "not decided yet";

function getComputerChoice() {
    const x = Math.random();
    if ( x < 0.334 ) { computerChoice = "rock"}
    else if ( (0.334 <= x) && (x <= 0.68) ) { computerChoice = "paper"}
    else  { computerChoice = "scissors"}
    return computerChoice
}


function getHumanChoice() {
    humanChoice = prompt("Paper, rock, scissors, what will be your choice ? To choose paper enter 1, to choose rock enter 2, to choose scissors enter 3", "Enter your choice here" )
    if ( humanChoice == "1") { humanChoice = "paper"}
    else if (humanChoice == "2" ) { humanChoice = "rock"}
    else  if (humanChoice == "3" ) { humanChoice = "scissors"}
    return humanChoice

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let a = humanChoice + ' ' + computerChoice;
        switch (a) {
            case 'paper rock':
            case 'scissors paper':
            case 'rock scissors':
                console.log(a,': You win');
                break;
    
            case 'paper scissors':
            case 'scissors rock':
            case 'rock paper':
                console.log(a,': You loose');
                break;
    
            default:
                console.log(a,': No ones wins');
        }
    }

    for( let i = 1; i <= 5 ; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);


    }

}

playGame();