const num = +prompt('Enter a positive integer number');

let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

document.body.innerHTML = `<h1>${num} is ${isPrime ? "a prime number" : "not a prime number"}.</h1>`;