// Arguments in Javascript:

function addNumbers(num1, num2) {
    console.log(arguments);// arguemnts is a object like array.
    return num1 + num2;
}
let result = addNumbers(2,3,4,5);
console.log(result);