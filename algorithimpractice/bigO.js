//Big O constant and linear time
//how long is it taking how long does it take when it grows.

//O(1) = constant

var constantExample = function(array, number) {
    return array[number];
}

//O(n) = linear (makes a new array) increased time

var linearExample = function(array) {
    array.map(number => number + 1)
}

//quadratic time O(n^2) ex. 10 * 10 = 100, grows exponentially
//repeat introduce to everyone in room, go back to 2nd, reintroduce,
//go back reintroduce to 3rd, etc... very slow!! get to a point where function 
//become unsustainable the bigger the array gets. huge exponenetial explosion
var quadraticExample = function(arr) {
    arr.map(num => num + arr.reduce((a,b) => a + b))
}

var orange = Array(1000).fill(1);
console.time('a')
quadraticExample(orange)
console.timeEnd('a')