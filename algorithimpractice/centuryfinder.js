// Input = year, output = what century that year belongs in.
//ie 2000 = century 20, 2001 = century 21 
// 0 = return zero
// 1 = return 1
//1 or greater and 100 or less return 1
//101 or greater and 200 or less return 2
//201 or greater and 300 or less return 3

//a century = 2000 / 100
//99 / 100 = .99
//2008 /100 = 20.08
//2001 / 100 = 20.01
//800 / 100 = 8
//round up!

//take the year, divide by 100 and round up!
//return that value

var centuryFinder = function(year) {
    return Math.ceil(year/100);
}




