const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber){
  const description = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);

}

function add() {
  const enteredNum = getUserInput();
  const initial = currentResult
  currentResult = currentResult + enteredNum;
  createAndWriteOutput('+', initial, enteredNum);
}

function subtract(){
  const enteredNum = getUserInput();
  const initial = currentResult
  currentResult = currentResult - enteredNum;
  createAndWriteOutput('-', initial, enteredNum);
}

function multiply(){
  const enteredNum = getUserInput();
  const initial = currentResult
  currentResult = currentResult * enteredNum;
  createAndWriteOutput('*', initial, enteredNum);
}

function divide(){
  const enteredNum = getUserInput();
  const initial = currentResult
  currentResult = currentResult / enteredNum;
  createAndWriteOutput('/', initial, enteredNum);
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
