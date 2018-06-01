//recursive find an exponent
var exponent =function(base, exp){
	if(exp === 1) {
		return base;
	}
	return base * exponent(base, --exp)
}

console.log(exponent(5, 4));
