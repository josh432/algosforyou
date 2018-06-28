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