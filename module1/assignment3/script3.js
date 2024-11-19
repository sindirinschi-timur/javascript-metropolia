const num1 = +prompt('Enter the first number');
const num2 = +prompt('Enter the second number');
const num3 = +prompt('Enter the third number');

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const avg = sum / 3;

document.body.innerHTML = `
    <p>Sum is ${sum}</p>
    <p>Product is ${product}</p>
    <p>Average is ${avg.toFixed(2)}</p>
`;