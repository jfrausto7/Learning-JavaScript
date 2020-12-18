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

function calculateResult(calculationType){
  const enteredNum = getUserInput();
  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNum
  ){
    return;
  }

  const initial = currentResult;
  if(calculationType === 'add'){
    currentResult += enteredNum;
    createAndWriteOutput("+", initial, enteredNum);
    writeToLog('ADD', initial, enteredNum, currentResult);
  }
  if(calculationType === 'subtract'){
    currentResult -= enteredNum;
    createAndWriteOutput("-", initial, enteredNum);
    writeToLog('SUBTRACT', initial, enteredNum, currentResult);
  }
  if(calculationType === 'multiply'){
    currentResult =  currentResult * enteredNum;
    createAndWriteOutput("*", initial, enteredNum);
    writeToLog('MULTIPLY', initial, enteredNum, currentResult);
  }
  if(calculationType === 'divide'){
    currentResult = currentResult / enteredNum;
    createAndWriteOutput("/", initial, enteredNum);
    writeToLog('DIVIDE', initial, enteredNum, currentResult);
  }
}

/*
 * Four functions for each button!
 */
function add() {
  calculateResult('add');
}

function subtract() {
  calculateResult('subtract');
}

function multiply() {
  calculateResult('multiply');
}

function divide() {
  calculateResult('divide');
}

//event listeners!
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
