//Heather Kastens
//November 13, 2013
//Conditionals_Industry

var chicsOnHand = prompt ("How many chickens are currently in the warmer?"); //This is the number of chickens that are already made
var supposedAmount = prompt ("How many chickens are supposed to be in the warmer at this time?");// This is the amount of chickens that are supposed to be on done
var doIMakeChics; //This is the question we are solving for 

doIMakeChics = (chicsOnHand >= supposedAmount) ? "You do not need to make more chicken" : "You need to make enough chicken so that you have the right amount on hand";//Used Ternary style code to determine if we needed more chickens 
console.log(doIMakeChics);// The answer will be printed on the console
