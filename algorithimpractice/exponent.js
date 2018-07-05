//Recursive Algorithim - Exponent
//Input = 5, 4
//5 * 5 * 5 * 5 = 625
//must keep track of original number and the exponent

var exponent = function (base, exp) {
    if (exp === 1) {
        return base;
    }
    return base * exponent(base, --exp)
}


console.log(exponent(5,5));