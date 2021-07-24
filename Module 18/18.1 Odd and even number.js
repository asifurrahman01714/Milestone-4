// Assigning All duplicate code in a single function;
function evenifyAll(array) {
    let evenifyArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 == 0) {
            // console.log(num, 'This  number is even')
            evenifyArray.push(num);
        } else {
            // console.log(num*2, 'This number is odd');
            evenifyArray.push(num*num);
        }
    }
    return evenifyArray;
}

let nums = [12,34,25,67,34,23];
let resultEvenArray = evenifyAll(nums);
console.log(resultEvenArray);

// console.log(evenifyAll(nums));

// let friend_age = [21,22,23,24,25,26,27];
// evenifyAll(friend_age);
// console.log(evenifyAll(friend_age))


// So ..This is the problem. If you want to take multiple result from a 
// function don't use return. Because return will give you only a single result.So use console In this case
// But the problem can be solved by creating extra array. At first the new array will be blanked.
// But you can push item in that array. And return it . That's will be awesome.