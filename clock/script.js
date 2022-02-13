const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

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

window.onclick = () => {
	const currentTheme = localStorage.getItem("data-theme");
	console.log(currentTheme);
	if (currentTheme === "dark") {
		light();
	} else {
		dark();
	}
};

function light() {
    localStorage.setItem("data-theme", "light");
	document.documentElement.setAttribute("data-theme", "light");
};

function dark() {
    localStorage.setItem("data-theme", "dark");
	document.documentElement.setAttribute("data-theme", "dark");
};

let currentTheme = "dark";
currentTheme = localStorage.getItem("data-theme");

if (currentTheme == "light") {
	light();
} else {
  	dark();
}
