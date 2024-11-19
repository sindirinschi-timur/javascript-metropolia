const year = +prompt('Enter a year:');

const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
const msg = isLeap ? `${year} is a leap year!` : `${year} is not a leap year!`;

document.body.innerHTML = `<h1>${msg}</h1>`;
