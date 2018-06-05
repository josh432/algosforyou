//map
//filter

//map takes array iterates thru array, does something, push to new array and returns new array. not destructive.
//foreach produces nothing, map looks in array returns new array of values.
var apple = [4, 3, 2, 1, 5, 3, 2]
var map = (array, cb) => {
	var result = [];
	for (var i = 0; i < array.length; i++){
		result.push(cb(array[i]));
	}
	return result;
}

var example = map(apple, x => x * 2){
	return x * 2;
}

console.log(example);

//this is how map works, it is a built in method.
var test = apple.map(function(x){
	return x * 3;
});

var test = apple.map(x => x * 3)

console.log(test);

//filter similar to map, returns a new array. instead of running a callback it runs a truth test.
//if true, push to new array, if false skip value and omitt, returns array that passed truth test.
var filter = (array, cb) => {
	var result = [];
	for (var i = 0; i < array.length; i++){
		if(cb(array[i])){
			result.push(array[i]);
		}
	}
	return result;
}

var example = filter(apple, x => x % 2 === 0)
console.log(example);

var test = apple.filter(x => x > 2)
console.log(test);

