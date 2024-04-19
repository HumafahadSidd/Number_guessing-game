#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber);  //here is the secret number hidden here;)
const answers = await inquirer.prompt([
    //generate number.frm computer
    //user input for guessingnum
    //compare user input wid comp.generated numb.
    {
        name: "userGuessedNumber", //array list is in curly brack. & values r objects 
        type: "number",
        message: "Please guess a number between 1-6=",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guess correct number");
}
else {
    console.log("You guessed wrong number");
}
