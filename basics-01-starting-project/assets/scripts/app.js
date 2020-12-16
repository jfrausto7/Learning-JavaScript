const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const description = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

/*
 * Four functions for each button!
 */
function add() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult + enteredNum;
  createAndWriteOutput("+", initial, enteredNum);
  const logEntry = {
    operation: "ADD",
    prevResult: initial,
    number: enteredNum,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult - enteredNum;
  createAndWriteOutput("-", initial, enteredNum);
}

function multiply() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult * enteredNum;
  createAndWriteOutput("*", initial, enteredNum);
}

function divide() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult / enteredNum;
  createAndWriteOutput("/", initial, enteredNum);
}

//event listeners!
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
