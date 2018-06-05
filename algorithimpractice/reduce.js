//reduce works by accumulating all the values of an array and returning the final value
//array, cb, accumulator

var apple = [3, 4, 5, 2, 3, 2]
//reduce under the hood
// var reduce = function(arr, cb, a) {
// 	var accumulatorSet = a === undefined;
// 	arr.forEach(b => {
// 	if(accumulatorSet){
// 		a = b;
// 		accumulatorSet = false;

// 		} else {
// 			a = cb(a, b)
// 		}

// 	})
// 	return a;
// }

console.log(reduce(apple, (a,b) => a + b, 400));

//how its actually used

var awesome = apple.reduce(function(a, b) {
	return a + b;
}, 500)

console.log(awesome);