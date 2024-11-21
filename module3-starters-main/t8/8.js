'use strict';
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultDisplay = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const num1 = parseInt(num1Input.value, 10);
  const num2 = parseInt(num2Input.value, 10);
  const operation = operationSelect.value;
  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = 'Enter valid integers.';
    return;
  }
  
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      if (num2 === 0) {
        resultDisplay.textContent = 'Cannot divide by zero.';
        return;
      }
      result = Math.floor(num1 / num2);
      break;
    default:
      resultDisplay.textContent = 'Invalid.';
      return;
  }
  resultDisplay.textContent = `Result: ${result}`;
});
