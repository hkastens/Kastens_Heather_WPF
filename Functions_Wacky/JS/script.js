//Heather Kastens
//Functions Wacky
//November 21, 2013

var blue = prompt ("How many blue balloons would you like?");
var red = prompt ("How many red balloons would you like?");
var green = prompt ("How many green balloons would you like?");{
	var total = function (blue, red, green)
	
	blue = Number (blue);
	red = Number (red);
	green = Number (green);
	
	var totalBalloons = (blue + red + green);
	console.log("The total number of balloons that the customer would like is " + totalBalloons);
}
