function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
document.write('<ul>');
do {
    result = diceRoll();
    document.write(`<li>${result}</li>`);
} while (result !== 6);
document.write('</ul>');