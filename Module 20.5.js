function welcomeGuest(name, greetHandler) {
    greetHandler(name); // here greetHandler is like greetMorning That means by this function actually greetMorning is called
}
const actorName = 'Asif';
function greetMorning(name) {
    console.log('Good Morning ' + name);
}
welcomeGuest(actorName, greetMorning); // Passing greetMorning through welcomeGuest function

// And this process is called call back function..Where greetHandler is a call back function