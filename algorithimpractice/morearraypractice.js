//function declaration vs function expression
//forEach (no way to break out of it)
//Map
//these take anonymous functions , use to perform operation on an array

function apple() {

};
//anonymous function saved inside of apple
var apple = function(){

};

//hoisting
apple()
function apple() {

}
 //for each like a for loop
var apple = [3, 4, 6, 8];
//apple.forEach((num, index, arr) => console.log(num, index, arr));
//forEach under the hood
var forEach = function(array, cb){

for (var i = 0; i < apple.length; i++){
	cb(array[i], i, array);
	}
}

forEach(apple, function(x, y, z){
	console.log(x, y, z)
})

var apple = [3, 4, 5, 6]
apple.forEach(function(x, i, arr){
	console.log(x, i, arr);
});

var apple = [3, 4, 5, 6]
apple.forEach((x, i, arr) => console.log(x, i, arr));

