const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function Timer(duration, element) {
	var self = this;
	this.duration = duration;
	this.element = element;
	this.running = false;

	this.els = {
		ticker: document.getElementById('ticker'),
		seconds: document.getElementById('seconds')
	};

	this.element.addEventListener(touchEvent, function(e) {
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
		if (self.running) {
			self.reset();
		} else {
			self.start();
		}
	});
}

Timer.prototype.start = function() {
	var self = this;
	var start = null;
	this.running = true;
	var remainingSeconds = this.duration / 1000;
	this.els.seconds.textContent = fmtMSS(remainingSeconds);

	function draw(now) {
		if (!start) start = now;
		var diff = now - start;
		var newSeconds = Math.ceil((self.duration - diff) / 1000);

		if (diff <= self.duration) {
			self.els.ticker.style.height = 100 - diff / self.duration * 100 + '%';

			if (newSeconds != remainingSeconds) {
				self.els.seconds.textContent = fmtMSS(newSeconds);
				remainingSeconds = newSeconds;
			}

			self.frameReq = window.requestAnimationFrame(draw);
		} else {
			//self.running = false;
			self.els.seconds.textContent = 0;
			self.els.ticker.style.height = '0%';
			self.element.classList.add('countdown--ended');
		}
	}

	self.frameReq = window.requestAnimationFrame(draw);
};

Timer.prototype.reset = function() {
	this.running = false;
	window.cancelAnimationFrame(this.frameReq);
	this.els.seconds.textContent = fmtMSS(this.duration / 1000);
	this.els.ticker.style.height = null;
	this.element.classList.remove('countdown--ended');
};

Timer.prototype.setDuration = function(duration) {
	this.duration = duration;
	this.els.seconds.textContent = this.duration / 1000;
};

var timer = new Timer(1500000, document.getElementById('countdown'));
timer.reset();

function fmtMSS(s) {
	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}

window.addEventListener(touchEvent, mode);

function mode() {
	const currentTheme = localStorage.getItem('pomodoro-timer-data-theme');
	console.log(currentTheme);
	if (currentTheme == 'dark') {
		light();
	} else {
		dark();
	}
}

function light() {
	localStorage.setItem('pomodoro-timer-data-theme', 'light');
	document.documentElement.setAttribute('pomodoro-timer-data-theme', 'light');
}

function dark() {
	localStorage.setItem('pomodoro-timer-data-theme', 'dark');
	document.documentElement.setAttribute('pomodoro-timer-data-theme', 'dark');
}

let currentTheme = localStorage.getItem('pomodoro-timer-data-theme');

if (currentTheme == 'light') {
	light();
} else {
	dark();
}
