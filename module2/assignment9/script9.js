function even(nums) {
    let evens = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    } return evens;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = even(nums);
console.log('Initial array:', nums);
console.log('Even numbers:', evens);