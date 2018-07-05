//pseudo classical class instantiation 
//es 6 has a class method
//class = factory produces more objects you can use (constructor functions)
//essentially, constructor function
var Fruits = function() {
    //{} create an empty object
    
    this.origin;
    this.ripe;
    this.price;
    this.stock;
}

//must use keyword new
var apple = new Fruits();

apple.origin = "France";

//this refers to whatever is left of the dot
//can't do this with fat arrows

var Vegetables = function(origin, ripe, price, stock) {
    this.origin = origin;
    this.ripe = ripe;
    this.price = price;
    this.stock = stock;
}



var broccoli = new Vegetables("USA", true, 1.89, 800);
var kale = new Vegetables("Mexico", true, 1.90, 7000);

//can stick functions on contructor function
//prototypical inheritance, parents and children
//not global in scope.
//asks vegetable if it has function sold
//every new vegetable we make has access to protoype
Vegetables.prototype.sold = function() {
    this.stock--;
}

Vegetables.prototype.hasRipened = function() {
    this.ripe = true;
}

kale.sold();
var tomatoe = new Vegetables("Venezuela", false, 1, 1000);
tomatoe.hasRipened();

//everytime create new veggie, has properties for me, can have a lot of functions tied to it.




