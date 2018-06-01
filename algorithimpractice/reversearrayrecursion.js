//reverse recursion algo
var apple = [4, 5, 6, 7];

var reverser = function(arr){
	var result = [];
	var newArr = [];
	arr.forEach((item) => newArr.push(item));

	var inner = function(x){
		if(x.length > 0){
			result.push(x.pop())
			inner(x);

		}
		return;
	}
	inner(newArr);
	return result;
}

console.log(reverser(apple));
console.log(apple);