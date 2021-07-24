function evenifyAll(array) {
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 == 0) {
            console.log(num, 'This  number is even')
        } else {
            console.log(num*2, 'This number is odd');
        }
    }
}

let nums = [12,34,25,67,34,23];
evenifyAll(nums);

let friend_age = [21,22,23,24,25,26,27];
evenifyAll(friend_age);
