let nums = [];
for (let i = 0; i < 5; i++) {
  nums.push(+prompt('Enter a number'));
}

console.log('Numbers in reverse: ');
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}