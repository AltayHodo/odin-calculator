let operand1 = ''
let operand2 = ''
let operator = '';

const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('.equals-button');


operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', updateOperator);
});

function updateOperator(e){
  operator = e.target.textContent;
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
}

equalsButton.addEventListener('click', evaluate)

function evaluate(){
  if(!operand1 || !operand2) return;
  const newValue = operate(Number(operand1), Number(operand2), operator)
  operator = '';
  operand1 = newValue;
  operand2 = '';
  console.log(newValue);
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

