const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('image').addEventListener(touchEvent, animate);

function animate() {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();

	if (animate.isRunning) return;
	animate.isRunning = true;

	console.log('animate');
	image = document.getElementById('image');
	image.src = 'kirby-awake.gif';

	setTimeout(() => {
		image.src = 'kirby-asleep.gif';
		animate.isRunning = false;
	}, 3675);
}

var image = (new Image().src = 'kirby.gif');

/* FOR JS LOCAL STORAGE SETTINGS
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
*/

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE

function light() {
	document.documentElement.setAttribute('kirby-data-theme', 'light');
}

function dark() {
	document.documentElement.setAttribute('kirby-data-theme', 'dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark();
} else {
	light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		dark();
	} else {
		light();
	}
});
