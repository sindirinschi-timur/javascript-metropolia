document.querySelector('button').addEventListener('click', () => {
    const input = document.getElementById('calculation').value;
    const operators = ['+', '-', '*', '/'];
    let operator;
    operators.forEach(op => {
      if (input.includes(op)) {
        operator = op;
      }
    });
  
    if (operator) {
      const [num1, num2] = input.split(operator).map(Number);
      let result;
  
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }
  
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = 'Invalid.';
    }
  });
  