//reverse an array via recursion
var ar = function(arr){
	//new array
	var result = [];
	//recurive function
	var push = function(arr) {
		//pop out of the arr
		//push into result
		if (arr.length > 0) {
			result.push(arr.pop());
			push(arr);
		}
		return;

	}
	push(arr);
	return result;
}

console.log(ar([6,1,2,4]));