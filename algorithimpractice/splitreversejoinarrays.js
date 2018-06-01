//changes original array
var apple = [4, 5, 6, 7, 8]
var appleReversed = apple.reverse();
appleReversed;
apple;

//make contents of array as string = join
var apple = [4, 5, 6, 7, 8]
apple.join(', '); //can have a space/comma or no space

//variations on join under the hood
var apple = [4, 5, 6, 7, 8]
for (var i = 0; i < apple.length; i++){
	console.log(typeof (apple[i] + ""));
}

//split makes a string into an array with 1 item. doesn't effect original array
var apple "I am a happy boy!"
apple.split(); //add quotes to make each letter an item in array
apple.split('');
apple;

appleSplit = apple.split(' ');//can split every word or every letter

//reverse a string with chaining
var apple = "I am a happy boy!"
var appleSplit = apple.split(' ').reverse().join(' ');
appleSplit;

//functions
var reverser = function(str){
	if(typeof str !== "string"){
		return "you must provide a string"
	}
	return str.split('').reverse().join(' ');
}

var happy = "what a wonderful day!"
var confused = reverser();
confused;

//return numbers in array to separate strings
var arr =[1, 2, 3];
var numToString = function(){
var newArr = [];
for (var i=0; i<arr.length; i++){
	newArr.push(arr[i].toString());
	}
return newArr;
}
numToString();
