let operand1 = ''
let operand2 = ''
let operator = '';
let currentExpression = '';

const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('.equals-button');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear-button');
const deleteButton = document.querySelector('.delete-button');

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', updateOperator);
});

function updateOperator(e){
  operator = e.target.textContent;
  updateDisplay();
}

numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', updateOperand);
});

function updateOperand(e){
  const newNumber = e.target.textContent;
  if(!operator){
    operand1 += newNumber;
  }else{
    operand2 += newNumber;
  }
  updateDisplay();
}

function updateDisplay(){
  currentExpression = `${operand1}${operator}${operand2}`;
  display.textContent = currentExpression;
}

equalsButton.addEventListener('click', evaluate)

function evaluate(){
  if(!operand1 || !operand2) return;
  if(operator === '/' && operand2 === '0'){
    alert('You can\'t divide by 0!');
    clearValues();
    return;
  }
  const newValue = roundTo3Decimals(operate(Number(operand1), Number(operand2), operator));
  operator = '';
  operand1 = `${newValue}`;
  operand2 = '';
  display.textContent = newValue;
}

clearButton.addEventListener('click', clearValues);

function clearValues(){
  operator = '';
  operand1 = '';
  operand2 = '';
  updateDisplay();
}

deleteButton.addEventListener('click', deleteValue);

function deleteValue(){
  console.log(currentExpression);
  if(!operand1) return;
  if(operand1 && !operator){
    operand1 = operand1.slice(0,-1);
    updateDisplay();
  } else if(operator && !operand2){
    operator = '';
    updateDisplay();
  } else if(operand2){
    operand2 = operand2.slice(0, -1);
    updateDisplay();
  }
}

function operate(operand1, operand2, operator){
  if(operator === '+'){
    return add(operand1, operand2);
  }
  if(operator === '-'){
    return subtract(operand1, operand2);
  }
  if(operator === '/'){
    return divide(operand1, operand2);
  }
  if(operator === '*'){
    return multiply(operand1, operand2);
  }
}

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function divide(a,b){
  return a / b;
}

function multiply(a,b){
  return a * b;
}

function roundTo3Decimals(num){
  return Number(num.toFixed(3));
}