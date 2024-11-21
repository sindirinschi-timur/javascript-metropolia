let dogs = [];
for (let i = 0; i < 6; i++) {
    let dog = prompt('Enter the name of the dog');
    dogs.push(dog);
}
dogs.sort().reverse();
document.write('<ul>');
dogs.forEach(dog => document.write(`<li>${dog}</li>`));
document.write("</ul>");