const rollsNum = +prompt("Enter the number of dice rolls: ");
let sum = 0;

for (let i = 0; i < rollsNum; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}

document.body.innerHTML = `<h1>The sum of ${rollsNum} dice rolls is ${sum}</h1>`;
console.log(`The sum of ${rollsNum} dice rolls is ${sum}`); 