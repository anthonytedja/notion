const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock, 1000);

/* FOR JS LOCAL STORAGE SETTINGS
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = localStorage.getItem('clock-data-theme');
	console.log(currentTheme);
	if (currentTheme == 'dark') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('clock-data-theme', 'light');
	document.documentElement.setAttribute('clock-data-theme', 'light');
}

function dark() {
	localStorage.setItem('clock-data-theme', 'dark');
	document.documentElement.setAttribute('clock-data-theme', 'dark');
}

let currentTheme = localStorage.getItem('clock-data-theme');

if (currentTheme == 'light') {
	light();
} else {
	dark();
}
*/

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE

function light() {
	document.documentElement.setAttribute('clock-data-theme', 'light');
}

function dark() {
	document.documentElement.setAttribute('clock-data-theme', 'dark');
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
