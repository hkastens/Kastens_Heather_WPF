//Heather Kastens
//November 13, 2013
//Conditionals_Wacky

var costOfDog = prompt ("How much will you need to buy the dog and all the necessities?");
var moneyOnHand = prompt ("How much money you have on hand?");
var moneyYouExpectToMake= prompt ("How much money do you expect to make between now and when you want to buy the dog?");


var total = moneyOnHand + moneyYouExpectToMake;

if (moneyOnHand >= costOfDog){
	alert("You can get the dog!");
}else if (total >=){
	alert("You can get the dog, but only after you bring home the amount you were expecting to bring home.");
}else{
	alert("Sorry you will not have enough money");
}
