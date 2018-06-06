


 function minutes(m) {
	
switch(m) {
	
	case 0:
	return "o'clock";

	case 1:
	return "one";

	case 2:
	return "two";

	case 3:
	return "three";
	
	case 4:
	return "four";
	
	case 5:
	return "five";

	case 6:
	return "six";

	case 7:
	return "seven";
	
	case 8:
	return "eight";

	case 9:
	return 'nine';

	case 10:
	return 'ten';

	case 11:
	return 'eleven';
	
	case 12:
	return "twelve";

	case 13:
	return 'thirteen';
	
	case 14:
	return'forteen';
	
	case 15:
	return'quarter';
	
	case 16:
	return 'sixteen';
	
	case 17:
	return 'seventeen';
	
	case 18:
	return'eighteen';
	

	case 19:
	return'nineteen';
	
	case 20:
	return 'twenty';
	
	case 21:
	return 'twenty-one';
	
	case 22:
	return 'twenty-two';

	case 23:
	return 'twenty-three';
	
	case 24:
	return 'twenty-four';
	
	case 25:
	return 'twenty-five';
	
	case 26:
	return 'twenty-six';
	
	case 27:
	return 'twenty-seven';
	
	case 28:
	return 'twenty-eight';
	
	case 29:
	return 'twenty-nine';
	
	case 30:
	return 'half-past';
	
	case 45:
	return 'quarter';
	

	}
	
}


function hours(h) {
	switch(h) {
		case 1:
		return 'one';
		
		case 2:
		return 'two';
		
		case 3:
		return 'three';
		
		case 4:
		return 'four';
		
		case 5:
		return 'five';
		
		case 6:
		return 'six';

		case 7:
		return 'seven';
		
		case 8:
		return 'eight';
		
		case 9:
		return 'nine';
	
		case 10:
		return 'ten';
		
		case 11:
		return 'eleven';

		case 12:
		return 'twelve';
	
		}
}

function tellTime(hrs, min) {
	if(typeof hrs != 'number' || hrs < 1 || hrs > 12) {
		return "you must enter a number between 1-12"
	}
	if(typeof min != 'number' || min < 1 || min > 59) {
		return "you must enter a number between 1-59"
	}
	if(min <= 30) {
		console.log(`The time is ${min} past ${hrs}`)} 
		else
		return`The time is` 60-{min} to ${h} - 1`








