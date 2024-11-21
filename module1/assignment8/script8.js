const startYear = +prompt('Enter the start year');
const endYear = +prompt('Enter the end year');
let leapYears = [];

for (let i = startYear; i <= endYear; i++) {
  if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
    leapYears.push(i);
  }
}

const ul = document.getElementById('leap-years');
leapYears.forEach(year => {
  const li = document.createElement('li');
  li.textContent = year;
  ul.appendChild(li);
});