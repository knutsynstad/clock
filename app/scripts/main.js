// Calculate Clock Size
function setSize() {
	var clock = document.getElementById('clock');
	var w = window.innerWidth;
	var h = window.innerHeight;

	if (w > h) {
		clock.style.width = (h / 2) + 'px';
	} else {
		clock.style.width = (w / 2) + 'px';
	}
}

// Set Clock Size
setSize();

// Resize Clock if Window Changes Size
window.onresize = function() { setSize(); };

// Select Clock Arms
var second = document.getElementById('second');
var minute = document.getElementById('minute');
var hour = document.getElementById('hour');

// Get Current Time
function getTime() {
	var x = new Date(); 
	var h = x.getHours(); 
	if (h >= 13) { h = h - 12; }
	return [h, x.getMinutes(), x.getSeconds()];
}

// Set New Time
function setTime(time) {
	second.setAttribute("transform", "rotate(" + (time[2] * 6) + " 50 50)");
	minute.setAttribute("transform", "rotate(" + ((time[1] * 6) + ((time[2] * 6) / 60)) + " 50 50)");
	hour.setAttribute("transform", "rotate(" + ((time[0] * 30) + ((time[1] * 6) / 12)) + " 50 50)");
}

// Set Current Time
setTime(getTime());

// Set Subsequent Updates
setInterval(function() { setTime(getTime()); }, 1000);