//[3,4,8,4].map((x) => 3)
//function takes an array and number
//returns the same array but mutiplies eac
//num in the array by the num given
var recMap = function(arr, mult) {
	//pop each number out
	//mutiply by our number
	//push back into the arr
	//return the array
	if(arr.length === 0) {
		return;
	}
	var last = arr.pop();

	recMap(arr, mult);
	arr.push(last * mult);
	return arr;

}

//[5,8,2,1], 9
console.log(recMap([3, 6, 9, 12], 9))