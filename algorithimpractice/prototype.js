//prototype
//extra storage
//object
//array

//var test = [3, 4, 2, 3].forEach(x => console.log(x));


Array.prototype.sayHello = function(str) {
    console.log(str);
}

var happy = [3,4,2,3].sayHello("hey there"); 