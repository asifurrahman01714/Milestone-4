let nums = [12,34,25,67,34,23];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
   
    // if (num % 2 == 0) {
    //     console.log(num, 'This  number is even')
    // } else {
    //     console.log(num*2, 'This number is odd');
    // }
    evenify(num);
}

function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, 'This  number is even')
    } else {
        console.log(num*2, 'This number is odd');
    }
}

let friend_age = [21,22,23,24,25,26,27];
for (let i = 0; i < friend_age.length; i++) {
    const age = friend_age[i];
    
    // if (num % 2 == 0) {
    //     console.log(num, 'This  number is even')
    // } else {
    //     console.log(num*2, 'This number is odd');
    // }

    evenify(age);
}