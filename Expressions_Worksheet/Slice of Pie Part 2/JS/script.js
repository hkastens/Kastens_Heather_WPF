//Heather Kastens
//November 5, 2013
//Expression Worksheet
//Slice of Pie Part 2

var numberOfPeople = 11; //The number of people at party
var numberOfPizzas = 6; //The number of pizzas ordered
var numberOfSlices = 8; //The number of slices per pizza 

var numberOfSlicesSparkyGets = numberOfPizzas * numberOfSlices % numberOfPeople; //To find the slices of pizza that Sparky gets you take the total number of pizzas and multiple it by the number of slices. Then instead of using the / sign you use the % sign or the modulo operator to find the remainder. 
 
console.log("The number of pizzas that Sparky gets will be " + numberOfSlicesSparkyGets); //Thios is the amount of slices that Sparky gets.
