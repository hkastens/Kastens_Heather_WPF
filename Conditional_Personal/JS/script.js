//Heather Kastens
//November 13, 2013
//Conditional_Personal



var sonsTestScore = prompt ("What was his/her test score?"); //The score he received on his test
var lowestScore = prompt ("What is the lowest score they can get, in order to go to their friends this weekend?");//Prompt added asking what the lowest score possible to go to friends
if(sonsTestScore >= lowestScore){ //Equation to use to see if son can go to friends this weekend. If his score is better then or equal to 70 he can go
	console.log("He can go to his friends this weekend!"); //What will be printed to console if his score is high enough
}else{ //Used the else to show that there is an alternative if score is not high enough
	console.log("He needs to study this weekend");// what the console will show if his score is not high enough
}
