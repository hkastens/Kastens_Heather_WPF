//Heather Kastens
//November 13, 2013
//Conditionals_Wacky

var costOfDog = prompt ("How much will you need to buy the dog and all the necessities?"); //This is the amount that the dog will cost
var moneyOnHand = prompt ("How much money you have on hand?"); //This is the amount of money the person already has
var moneyYouExpectToMake = prompt ("How much money do you expect to make between now and when you want to buy the dog?"); //This is the amount of moeny you expect to receive
moneyOnHand = Number (moneyOnHand); //Changed the var moneyOnHand to a number which the value can be add to another
moneyYouExpectToMake = Number (moneyYouExpectToMake); //changed the var moneyYouExpectToMake to a number which the value can be added to another
var total = moneyOnHand + moneyYouExpectToMake; //The nuber values of each are being added together to get a total amount of money
alert("Your total amount will be " + total); //This is an alret to let user know much much money intotal they will have

if(moneyOnHand >= costOfDog){ //if the moneyOnHnad is greater than or equal to the costOfTheDog
	console.log("You can get the dog!");
}else if (total >= costOfDog){ //if the total is greater than or equal to the costOfDog
	console.log("You can get the dog, but only after you bring home the amount you were expecting to make");
}else{ //this is saying if neither one is true then
	console.log("Sorry you will not have enough money");
}
