//map datastructure
//can have anything for a key
//an array of objects
var test = new Map();
// test.set(function() {
// //     console.log('a')

// // }, 5);

test.set("boys", 20);
test.set("girls", 50);
test.set("somethinginbetween", 60);

console.log(test.get('boys'));
console.log(test.values());
console.log(test.keys());
for(let x of test) {
    console.log(x);
}

//destructuring
for (let[x, y] of test) {
    console.log(x, y);
}

//return all the keys
for (let x of test.keys()) {
    console.log(x);
}

//return all the values
for (let x of test.values()) {
    console.log(x);
}

//foreach in map
test.forEach(function(value, key){
    console.log(value, key);
})



test.forEach((x,y) => console.log(x, y));


//has

test.has("boys");

//delete just one key
test.delete('boys');



//delete
test.clear();

class MyMap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    mySet(a, b) {
        this.storage.push([a,b]);
    }
    forEach(cb) {
        for (let i = 0; i < this.storage; i++) {
            cb(this.storage[i][1], this.storage[i][0])
        }
    }
}
 let apple = new MyMap();
 apple.mySet(function(){
    console.log('happy') 
 }, 4)






