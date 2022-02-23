const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('image').addEventListener(touchEvent, function(e) {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	console.log('animate');
	image = document.getElementById('image');
	image.src = 'kirby-awake.gif';
	document.body.style.pointerEvents = 'none';

	setTimeout(() => {
		image.src = 'kirby-asleep.gif';
		document.body.style.pointerEvents = 'auto';
	}, 3675);
});

var image = (new Image().src = 'kirby.gif');

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = localStorage.getItem('kirby-data-theme');
	console.log(currentTheme);
	if (currentTheme == 'dark') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('kirby-data-theme', 'light');
	document.documentElement.setAttribute('kirby-data-theme', 'light');
}

function dark() {
	localStorage.setItem('kirby-data-theme', 'dark');
	document.documentElement.setAttribute('kirby-data-theme', 'dark');
}

let currentTheme = localStorage.getItem('kirby-data-theme');

if (currentTheme == 'light') {
	light();
} else {
	dark();
}
