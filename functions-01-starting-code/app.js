const startGameBtn = document.getElementById("start-game-btn");

// const form = function otherForm() {
//   //another way of declaring and initializing functions
// };

// function startGame() {
//   console.log("Game is starting...");
// }

// const person = {
//   name: "Max",
//   greet: function greet() {
//     console.log("Hello There!");
//   },
// };

// person.greet();

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER = "PLAYER_WINS";
const RESULT_COMPUTER = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt("Rock, Paper, or Scissors?", "").toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice! We picked ${DEFAULT} for you!`);
    return DEFAULT;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  //logic
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER;
  } else {
    return RESULT_COMPUTER;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice); 
  }else{
    winner = getWinner(computerChoice);
  } 
  let message;
  if (winner === RESULT_DRAW) {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you had a draw!`;
  } else if (winner === RESULT_PLAYER) {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you won!`;
  } else {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you lost!`;
  }
});

//not related to the game (rest operators)

const sumUp =  (resultHandler, ...numbers) => {
  let sum = a+b;
  for (const num of numbers){
    sum += num;
  }
  resultHandler(sum);

};

const subtractUp =  (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers){
    sum -= num;
  }
  resultHandler(sum);

};

const showResult = (result) => {
  alert('The result is: ' + result);
}

sumUp(showResult, 1, 5, 10, -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
subtractUp(showResult, 1, 2, 4, 5, 6, 6);


//.bind() preconfigures a default value for a function