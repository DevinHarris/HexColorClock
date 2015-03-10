function time() {
	var date = new Date(),
	clock = document.getElementById('clock'),
	localTime = document.getElementById('local_time'),
	h = date.getHours(),
	m = date.getMinutes(),
	s = date.getSeconds();

	if (h < 10) { h = "0" + h; }
	if (m < 10) { m = "0" + m; }
	if (s < 10) { s = "0" + s; }

	var current = h + ' : ' + m + ' : ' + s;
	var hexColor = '#' + h + m + s;
	
	var local = date.toLocaleTimeString();

	clock.innerHTML = local;
	//localTime.innerHTML = local;
	document.getElementById('hex_color').innerHTML = hexColor;
	document.body.style.background = hexColor;

}

setInterval(time, 100);