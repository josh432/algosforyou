//objects
//a place to hold stuff like an array
//series of key value pairs
//can be numbers, strings, another object, array or a function.
//basically a hash table
var fruits = {
    apples: 5,
    bananas: 14,
    oranges: 11,
    coconuts: 16
};

console.log(fruits.apples); //accessing a value through dot notation
//keys can be strings
//keys cannot be numbers
//keys cannot be used twice, must be unique
//can access via dot notation or bracket notation

var oranges = {
    color:"orange",
    quality: "good",
    quantity: 50
};

var bananas = {
    color:"yellow",
    quality: "low",
    quantity: 200
};

var mangos = {
    color:"yellow",
    quality: "great",
    quantity: 500
};
var fruits2 = [oranges, bananas, mangos];
console.log(fruits2[0].color); //can access object keys/values via dot notation
//get quality of each fruit
//get total fruit
var total = 0
for (var i = 0; i < fruits2.length; i++){
    total += fruits2[i].quantity;//increment total can use fruits.forEach(x => total += x.quantity)
    console.log(fruits2[i].quality); //returns good, low great
    
}
console.log(total);//logs total








