//find the factorial via recursion 5 * 4 * 3 * 2 * 1
function fr(num) {
	//base case
	if(num === 0){
		return 1;
	}
	return(num * fr(--num))
}

console.log(fr(5));