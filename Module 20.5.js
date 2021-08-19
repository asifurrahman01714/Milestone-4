function welcomeGuest(name, greetHandler) {
    greetHandler(name); // here greetHandler is like greetMorning That means by this function actually greetMorning is called
    console.log(arguments);
}
const actorName = 'Asif';
function greetMorning(name) {
    console.log('Good Morning ' + name);
}

function greetEvening(name) {
    console.log('Good Evening ' + name);
}

welcomeGuest(actorName, greetMorning); // Passing greetMorning through welcomeGuest function
welcomeGuest('Sakib', greetEvening);
welcomeGuest('Jehan', function(name){
   console.log('Good Afternoon', name); // Added Directly a callback function..by nameless function.
})
// And this process is called call back function..Where All greetHandler  functions is a call back function