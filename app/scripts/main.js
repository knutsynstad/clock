console.log('\'Allo \'Allo!');




var currentSecond = 0;
var currentMinute = 0;
var currentHour = 0;

var second = document.getElementById('second');

function addSecond() {
	if (currentSecond > 354) {
		currentSecond = 0;
	}
	second.setAttribute("transform", "rotate(" + currentSecond + " 50 50)");
	currentSecond += 6;
}

setInterval(addSecond, 250);