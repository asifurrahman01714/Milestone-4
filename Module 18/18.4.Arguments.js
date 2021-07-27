// Arguments in Javascript:

function addNumbers(num1, num2) {
    console.log(arguments);// arguemnts is a object like array.
    let sum=0;
    console.log(double) // Don't call a variable with var before declaring it.It will not occured any error just show you undefined.'
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    function logInfo(message) {
        console.log(message);
    }
    logInfo('Hei,Call a function after declaring it. Although any error not created but it is a good practice/')
    var double = sum * 2;
    console.log(tripple); // If you try access any variable with const before declaring it. It will give you error. So don't do this.
    const tripple = sum * 3;
    return sum;
}
let result = addNumbers(2,3,4,5);
console.log(result);