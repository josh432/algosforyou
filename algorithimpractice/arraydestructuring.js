//array destructuring
// var x ,y, z, a;
// var arr = [10,20,30,40];

// x = arr[0];
// y = arr[1];
// z = arr[2];
// a = arr[3];

// [x,y,z,a,b=50]= arr;//50 is the default value if not in original array

// console.log(x, y, z, a, b);


// var a = 10;
// var b = 50;
// //to swap values
// // var temp = b;
// // a = b;
// // b = a;

// //easier way to swap
// [a,b] = [b,a];
// console.log(a,b);

function test() {
    return [5,7,2,4]
}

var [a, ,b,c,d] = test(); //will skip over value
console.log(a,b,c,d);