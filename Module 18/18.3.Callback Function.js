// Callback Function: The function which is called by another function parameter.

function mainFunction(name, age, task) {
    console.log('Your Name is', name);
    console.log('Your age is', age);
    task();
}
function washHand() {
    console.log("wash Hand")
}
function takeShower() {
    console.log('Take Shower');
}
mainFunction('Asif', 24, washHand);
mainFunction('Sakib', 21, takeShower);