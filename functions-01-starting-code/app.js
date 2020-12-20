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

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt('Rock, Paper, or Scissors?', '').toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice! We picked ${DEFAULT} for you!`);
    return DEFAULT;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning){
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
