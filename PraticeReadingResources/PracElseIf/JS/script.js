//Conditional Logic - else if

var kidHeight = 46;
var minHeight = 48;
var wParentHeight =45;
//if the child is old enough, print to the console "you can ride!"
//if the child is over 48 inches in height

if(kidHeight > minHeight){
	console.log("You can ride!");
}else if (kidHeight > wParentHeight){
	console.log("You can ride but only with a parent");
}else{
	console.log("Sorry kid");
}
