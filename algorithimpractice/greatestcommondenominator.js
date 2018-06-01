//greatest denominator
//min divides equally into the max - return the min
//4 and 10
//4 10/4 = 2
//2 and 4 if 4 divided  by 2, 2 is the answer
//4 and 11
//4 11/4 = 3
//3 and 4
//3 4/3 = 1
//1 and 3 answer is 1.

//if smaller number can't be divided into bigger number evenly,
//take bigger number divide smaller number take remainder. if remainder can be evenly divided into smaller
//number, than we've found it.

var gcd = function(num1, num2) {
	//return smaller number
	var smaller = Math.min(num1, num2);
	//return larger number
	var larger = Math.max(num1, num2);
	
	if(larger % smaller === 0){
		return smaller;
	}
	else {
		return gcd(smaller, larger % smaller)
	}

}

console.log(gcd(10, 4));