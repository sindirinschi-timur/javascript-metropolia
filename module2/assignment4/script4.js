let nums = [];
let num;

do {
    num = +prompt('Enter a number(0 to stop): ');
    if (num !== 0) {
        nums.push(num);
    }
} while (num !== 0);

nums.sort((a, b) => b-a);
console.log('Sorted in descending order: ');
console.log(nums);

