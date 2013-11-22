//Heather Kastens
//Functions Industry
//November 21, 2013

var chickenBoxs = alert ("Any box of chicken that is 25 pieces and up are $2.00 off \n normal price of chicken is a dollar a piece of chicken");//Alert telling about the sale

var boxSize = prompt ("How many pieces of chicken would you like?");//The amount of chicken the customer would like
	if (boxSize > 8){//if more then 8 pieces are wanted 
		
		boxSize = Number (boxSize);//setting up equation to use inputted number to be actual number 
		console.log("The sale price of your chicken box is " + (boxSize - 2) + " dollars");//The sale price pf chicken is printed to console
}else{// If chicken is less then 8
	console.log("Sorry your chicken is not on sale.")//What is printed to console if chicken is less then 8
}
