const name = prompt('Enter your name');
const houseNum = Math.floor(Math.random() * 4) + 1;

let house;
switch (houseNum) {
    case 1:
        house = 'Gryffindor';
        break;
    case 2:
        house = 'Hufflepuff';
        break;
    case 3:
        house = 'Ravenclaw';
        break;
    case 4:
        house = 'Slytherin';
        break;
}

document.body.innerHTML = `<h1>${name}, you belong to ${house}!</h1>`;
