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

function writeToLog(
  operationIdentifier,
  prev,
  operationNum,
  newResult
){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prev,
    number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}


/*
 * Four functions for each button!
 */
function add() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult + enteredNum;
  createAndWriteOutput("+", initial, enteredNum);
  writeToLog('ADD', initial, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult - enteredNum;
  createAndWriteOutput("-", initial, enteredNum);
  writeToLog('SUBTRACT', initial, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult * enteredNum;
  createAndWriteOutput("*", initial, enteredNum);
  writeToLog('MULTIPLY', initial, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserInput();
  const initial = currentResult;
  currentResult = currentResult / enteredNum;
  createAndWriteOutput("/", initial, enteredNum);
  writeToLog('DIVIDE', initial, enteredNum, currentResult);
}

//event listeners!
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
