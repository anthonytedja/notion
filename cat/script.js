const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('image').addEventListener(touchEvent, function(e) {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	console.log('animate');
	image = document.getElementById('image');
	image.src = 'cat-animate.gif';

	setTimeout(() => {
		image.src = 'cat-idle.gif';
	}, 3500);
});

var image = (new Image().src = 'cat-idle.gif');

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = localStorage.getItem('cat-data-theme');
	console.log(currentTheme);
	if (currentTheme == 'dark') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('cat-data-theme', 'light');
	document.documentElement.setAttribute('cat-data-theme', 'light');
}

function dark() {
	localStorage.setItem('cat-data-theme', 'dark');
	document.documentElement.setAttribute('cat-data-theme', 'dark');
}

let currentTheme = localStorage.getItem('cat-data-theme');

if (currentTheme == 'light') {
	light();
} else {
	dark();
}
