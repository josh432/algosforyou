


var apple = {
    //color: 'red',
    number: 10
}

// var color = apple.color;    
// var number = apple.number;
// console.log(color, number);

//object destructuring

var{color = 'pink', number = 0} = apple;

console.log(color, number);

