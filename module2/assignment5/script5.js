let nums = [];
while (true) {
    let num = +prompt('Enter a number: ');
    if (nums.includes(num)) {
        console.log('Duplicate number!');
        break;
    } nums.push(num);
}

nums.sort((a, b) => a - b);
console.log('Sorted in ascending order: ');
console.log(nums);