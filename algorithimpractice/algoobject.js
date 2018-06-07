//solving algos with objects
//count how many of each letter in a string
//return the letter that occurs the most

//input = "I am a happy dog"\
//output = a

//get rid of spaces
//lowercase everything
//iterate through the string
//build a counting object, by asking at each iterattion
//have I seen this letter before?
//if yes, increment
//if no, add to the object, start count with 1
//{a: 1, c: 3, f: 1} etc. building up an object with a count
//iterate through the object, keep track of highest number of occurences and which
//letter is the highest number.

var greatestOcc = function(str) {
    var highestNumber = 0;
    var highestLetter;
    var counter = {}
    str.toLowerCase().split(' ').join('').split('')
    .forEach(x => {
        if(counter[x]) {
            counter[x] ++;
        }
        else {
            counter[x] = 1;
        }

    }) //takes a string, turns to lower case, split turns into array, join all letters back to string, split back to array
    for (var x in counter){
       // console.log(x); //get just the keys
       // console.log(counter[x]) //gets the value
      // console.log(x, counter[x]); //gets the keys and the value
        if (counter[x] > highestNumber) {
            highestNumber = counter[x];
            highestLetter = x;
        }
    }
 //console.log(counter);
    return highestLetter;

}

var apple = "I am a happy dog";
console.log(greatestOcc(apple));

