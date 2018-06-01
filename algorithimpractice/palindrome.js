function Palindrome(str){
	str.toLowerCase();
	var str2 = str.split('').reverse.join('');
	return str === str2;
}