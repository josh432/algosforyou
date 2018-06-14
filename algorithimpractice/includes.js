//includes

var arr = [5,2,3,5,2,3,4];
var test = arr.indexOf(3); //returns the index of first appearence
//if not there will return -1

var test2 = arr.includes(5);//returns true if isn't in array returns false

//can search from specific index
var test3 = arr.includes(9,1); //returns false search for 9 in index 1
