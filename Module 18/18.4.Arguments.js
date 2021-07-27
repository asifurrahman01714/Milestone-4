// Arguments in Javascript:

function addNumbers(num1, num2) {
    console.log(arguments);// arguemnts is a object like array.
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}
let result = addNumbers(2,3,4,5);
console.log(result);