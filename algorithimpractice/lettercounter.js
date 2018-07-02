//count the number of occurences of a letter in a string, return the number of occurences
//input: "I have a big ball", "a"
//output: 3
//input: "I have a big ball", "s"
//output: 0

//iterate through the string.
//each letter is this the letter I'm looking for? Is this the first time I've seen it?
//If yes increase the count by 1.
//If no, start the count at 1.

//create a variable result and set to zero
//iterate through the string and if we find the target we will add
//1 to result.

var letterCounter = function(string, target){
    var result = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] === target) {
            result++;
        }
    }
    return result;
}
