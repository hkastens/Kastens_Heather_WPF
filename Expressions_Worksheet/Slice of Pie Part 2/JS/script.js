//Heather Kastens
//November 5, 2013
//Expression Worksheet
//Slice of Pie Part 2

var numberOfPeople = 11;
var numberOfPizzas = 6;
var numberOfSlices = 8;

var numberOfSlicesSparkyGets = numberOfPizzas * numberOfSlices % numberOfPeople;
 
console.log("The number of pizzas that Sparky get will be " + numberOfSlicesSparkyGets);
