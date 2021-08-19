function welcomeGuest(name, greetHandler) {
    greetHandler(name); // here greetHandler is like greetMorning That means by this function actually greetMorning is called
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
// And this process is called call back function..Where greetHandler is a call back function