//Conditional Logic - Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
//var paycheck = 200;
var wonLottery = true;
//if price of the phone is less our budget and our paycheck is over 300
//if(iPhonePrice < budget && paycheck > 300){
	//console.log("We can buy the phone");
//}else{
	//console.log("No phone for you");
//}

if(iPhonePrice < budget || wonLottery ===true){
	console.log("We can buy the phone");
}else{
	console.log("No phone for you");
}
