//Anonymous Functions (clostures)


//var functionName = function (){
	//code to run
//}
//functionName();


var  calcArea = function(width, height){//defining
	//code the function runs
	var area = width * height;
	return area;
}
var a = calcArea (20, 30);//invoking
console.log(a);
