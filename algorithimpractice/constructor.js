//constructior
//a factory for functions
//pseudo-classical
//convention to use capital letters

var Puppy = function(age, weight, color)  {
    this.age = age;
    this.weight = weight;
    this.color = color;
}

Puppy.prototype.grow = function() {
    this.age++;
}

var amy = new Puppy(5, 20, 'blue'); //use new
amy.grow();
console.log(amy);

var sam = new Puppy(9, 12, 'red');
console.log(sam);
sam.grow();
console.log(sam);
