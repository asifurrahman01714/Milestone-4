let nums = [12,34,25,67,34,23];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
    if (element % 2 == 0) {
        console.log(element, 'This  number is even')
    } else {
        console.log(element*2, 'This number is odd');
    }
}