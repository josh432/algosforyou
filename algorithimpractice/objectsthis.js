//objectsthis
//assign new values to objects
//asssign arrays to objects, assign objects to objects
//access and add to those values
//objects and the keyword this

//object literal
var fruits = {
    a: 5,
    b: 6
};

fruits.f = 20; //will make a key f gives it value of 20

//assign array to objects
fruits.g = [];
//assign objects to objects
fruits.h = {
    happy: [['apples', 2], ["bananas", 4], ["coconuts", 2]], //tuples
    sad: "dogs"
};

console.log(fruits.h.happy[1][1])//get banana qty
fruits.h.sad = "cats"; //reassigns value

var fruits3 = {
    a: 5,
    b: 6,
    c: function (){
      console.log(this.b);  //this.b = fruits.b
    }
};

//to run function within an object, and pass paramter
fruits3.c();

//this refers to context/scope
//look where functions is being called from/invoked. look to left of dot.
//fat arrow changes the context of this. => left of arrow doesn't apply, only where it is created
//=> where it is currently at.







