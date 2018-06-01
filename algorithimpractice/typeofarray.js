var apple = ['hello', 52, 2, 33, "bird", 43];
//output list how many #'s and strings in array
//1. output list how many type of string and howmany type of number in array
//iterate through the array, ask are typeof string are you typeof number
var typeCounter = function(arr){
	var string = 0;
	var number = 0;
	arr.forEach((x) =>{
		if(typeof x === 'string') {
			string++;
		}
		if(typeof x === "number") {
			number++;
		}
	})
	return `There are ${string} strings, and there are ${number} numbers`
}
console.log(typeCounter(apple));

//input array of strings or numbers
//output = string, and this string is going to list
//by type and order they come in

//string 1 ='hello', string 2 = 'bird'
//make an array for strings
//make an array for numbers
//iterate through the array, typecheck, and push to correct array
//iterate through the string array
//create a variable called results
//result + `string ${i} =${strings[i]}`
var apple = ['hello', 52, 2, 33, "bird", 43];
var apple2 = function(arr){
	var strings = [];
	var numbers = [];
	var result = '';
	for(var i = 0; i<arr.length; i++) {
		if(typeof arr[i] === 'string'){
			strings.push(arr[i]);
		}
		if(typeof arr[i] === 'number') {
			numbers.push(arr[i]);
		}
	}
	for(var i = 0; i< strings.length; i++){
		result += `String ${i + 1} = ${strings[i]} `
	}
	for(var i = 0; i< numbers.length; i++){
		result += `Number ${i + 1} = ${numbers[i]} `
	}
	return result;
}

console.log(apple2(apple));