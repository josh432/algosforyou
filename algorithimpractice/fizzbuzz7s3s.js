//print to the console with conditional logic
//if the number is divisible by 3, print fizz instead of number.
//if the number is divisible by 7, print buzz instead of the number.
//if the number is divisible by 7 and 3 print fizzbuzz.

//print each number 1-100 / for loop
//ask is it deivisible by 3 and 7?
	//if yes, print fizzbuzz
//if not, is it divisble by 3?
	//if yes, print fizz
//if not, is it divisible by 7?
	//if yes, print buzz
//if none of these print fizzbuzz
  
for(var i = 1; i < 101; i++) {
	if(i % 3 === 0 && i % 7 === 0){
		console.log('fizzbuzz');
	} else if (i % 3 === 0){
		console.log('fizz');
	} else if (i % 7 === 0){
		console.log('buzz');
	} else {
		console.log(i)
	}
}