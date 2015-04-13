console.log('\'Allo \'Allo!');




var currentSecond = 1;
var currentMinute = 55;
var currentHour = 1;

var second = document.getElementById('second');
var minute = document.getElementById('minute');
var hour = document.getElementById('hour');

function addSecond() {
	if (currentSecond > 60) {
		currentSecond = 1;
		addMinute();
	}
	second.setAttribute("transform", "rotate(" + (currentSecond * 6) + " 50 50)");
	currentSecond += 1;
}

function addMinute() {
	if (currentMinute > 60) {
		currentMinute = 1;
		addHour();
	}
	minute.setAttribute("transform", "rotate(" + (currentMinute * 6) + " 50 50)");
	currentMinute += 1;
}

function addHour() {
	if (currentHour > 12) {
		currentHour = 1;
	}
	hour.setAttribute("transform", "rotate(" + (currentHour * 30) + " 50 50)");
	currentHour += 1;
}



setInterval(addSecond, 10);