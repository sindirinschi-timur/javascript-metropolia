function diceRoll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let sides = +prompt('Enter the number of sides for the dice: ');
let result; 
document.write('<ul>');
do {
  result = diceRoll(sides);
  document.write(`<li>${result}</li>`);
} while (result !== sides);
document.write('</ul>');