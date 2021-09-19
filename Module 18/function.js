
function display(){
    console.log('Function Declaration');
}
display(); // Function Calling

function show(){
    return 100;
}
var result = show();
console.log(result);

function addNumbers(num1=2, num2=2) {
    console.log(num1 + num2)
    return num1 + num2;
}
var result = addNumbers(5,5);
console.log(result);
addNumbers(1,2);