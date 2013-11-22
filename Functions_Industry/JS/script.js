//Heather Kastens
//Functions Industry
//November 21, 2013

var chickenBoxs = alert ("Any box of chicken that is 25 pieces and up are $2.00 off \n normal price of chicken is a dollar a piece of chicken");

var boxSize = prompt ("How many pieces of chicken would you like?");
	if (boxSize > 8){
		
		boxSize = Number (boxSize);
		console.log("The sale price of your chicken box is " + boxSize - 2 + " dollars");
	}
