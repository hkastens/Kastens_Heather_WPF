//Heather Kastens
//Functions_Personal
//November 21, 2013



var A = prompt ("How many A's did the child receive?");//first prompt
var moneyEarned = prompt ("How much money is each A worth?");{//second prompt
    var moneyPerA = function (A, moneyEarned) //difining
    
	A = Number (A);//truning the var A into the actual number 
    moneyEarned = Number (moneyEarned);//turning var moneyEarned into actual number to be add
	var totalMoney = (A * moneyEarned);//taking the amount of A's earned and muiltipling them by the dollar amount earned per A
	console.log("Your child earned a total of " + totalMoney + " dollars");
}	
	


    