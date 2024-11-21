const diceNum = +prompt('Enter the number of dice rolls: ');
const targetSum = +prompt('Enter the target sum: ');

let trials = 10000;
let success = 0;

for (let i = 0; i < trials; i++) {
    let sum = 0;
    for (let j = 0; j < diceNum; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === targetSum) {
        success++;
    }
}

const probability = success / trials * 100;
document.body.innerHTML = `<h1>The probability of getting a sum of ${targetSum} with ${diceNum} dice rolls is ${probability.toFixed(2)}%.</h1>`;
