"use strict";
// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points !");
}
// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You got 0 points.");
}
// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}