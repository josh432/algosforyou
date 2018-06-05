//having functions solve problems
//total # of people
//expected per hour sales
//number of hours left in the day
//total cookies sold
//total left to sell


var john = 10;
var joe = 2;
var bob = 7;
var danny = 15;
var sellers = 0;
var cookiesSold = 0;
var cookieLeft = 0;
var hoursLeft = 0;
var cookiesPerHour = 0;
var cookieToSell = 200;


var maple = function(johnWork, joeWork, bobWork, dannyWork, hourlyCookiesSold, hoursLeft) {
	cookiesPerHour = 0;
	sellers = 0;
	if(johnWork){
		cookiesPerHour += john;
		sellers += 1;
	}
	if(joeWork){
		cookiesPerHour += joe;
		sellers += 1;
	}
	if(bobWork){
		cookiesPerHour += bob;
		sellers += 1;
	}
	if(dannyWork){
		cookiesPerHour += danny;
		sellers += 1;
	}
	cookiesSold += hourlyCookiesSold;
	cookieLeft = cookieToSell - cookiesSold;
	return`there are ${sellers} sellers out. they've sold ${cookiesSold} cookies, they have ${cookieLeft} cookies left to sell they have ${hoursLeft} hours left, we will sell ${cookiesPerHour} cookies per hour.`
}

console.log(maple(false, true, true, false, 40, 4));