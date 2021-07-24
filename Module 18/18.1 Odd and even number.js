// Assigning All duplicate code in a single function;
function evenifyAll(array) {
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 == 0) {
            console.log(num, 'This  number is even')
            // return num;
        } else {
            console.log(num*2, 'This number is odd');
            // return num * 2;
        }
    }
}

let nums = [12,34,25,67,34,23];
evenifyAll(nums);
// console.log(evenifyAll(nums));

let friend_age = [21,22,23,24,25,26,27];
evenifyAll(friend_age);
// console.log(evenifyAll(friend_age))


// So ..This is the problem. If you want to take multiple result from a 
// function don't use return. Because return will give you only a single result.So use console In this case