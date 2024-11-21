if (confirm('Should I calculate the square root?')) {
    const num = parseFloat(prompt('Enter a number:'));

    if(num < 0) {
        document.body.innerHTML = `<h1>The square root of a negative number is not defined</h1>`;
    } else {
        const sqRoot = Math.sqrt(num);
        document.body.innerHTML = `<h1>The square root of ${num} is ${sqRoot}.</h1>`;
    }
} else {
    document.body.innerHTML = `<h1>You chose not to calculate the square root.</h1>`;
}