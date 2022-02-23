const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('image').addEventListener(touchEvent, function(e) {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	console.log('animate');
	image = document.getElementById('image');
	image.src = 'rimuru.gif';
});

var image = (new Image().src = 'rimuru.gif');

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = localStorage.getItem('rimuru-data-theme');
	console.log(currentTheme);
	if (currentTheme == 'dark') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('rimuru-data-theme', 'light');
	document.documentElement.setAttribute('rimuru-data-theme', 'light');
}

function dark() {
	localStorage.setItem('rimuru-data-theme', 'dark');
	document.documentElement.setAttribute('rimuru-data-theme', 'dark');
}

let currentTheme = localStorage.getItem('rimuru-data-theme');

if (currentTheme == 'light') {
	light();
} else {
	dark();
}
