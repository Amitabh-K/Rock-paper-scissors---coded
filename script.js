var compChoices = ["r", "p", "s"]

var randomNumber = Math.floor(Math.random()*3);
var compGuess = compChoices[randomNumber];
console.log(compGuess, randomNumber);

var wins = 0;
var losses= 0;
var ties = 0;

var userGuess = prompt("enter your choice");
console.log(userGuess);

if (userGuess === "p" && compGuess === "r" || 
    userGuess === "r" && compGuess === "s" || 
    userGuess === "s" && compGuess === "p"

) {

wins++
alert("you win");

 } else if (userGuess ===compGuess) {
    ties++;
    alert('tie')
 }
 else{
losses++;
alert('you lose');

 }



