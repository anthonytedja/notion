function textClock() {

    var newDate = new Date(),
        day = newDate.getDay(),
        hours = newDate.getHours(),
        minutes = newDate.getMinutes().toString(),
        seconds = newDate.getSeconds().toString();

    if (hours > 12 && hours !== 0 && hours !== 23) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = 0 + minutes;
    }
    if (seconds < 10) {
        seconds = 0 + seconds;
    }

    var minsSecs = minutes + seconds;
    if (minsSecs > 3230) {
        hours++;
    }

    if (day == 5) {
        $('#tgif').html('TGIF');
    }

    hoursObj = {
        1: '#one',
        2: '#two',
        3: '#three',
        4: '#four',
        5: '#five-hr',
        6: '#six',
        7: '#seven',
        8: '#eight',
        9: '#nine',
        10: '#ten-hr',
        11: '#eleven',
        12: '#twelve',
        23: '#eleven',
        24: '#midnight',
        0: '#midnight'
    };

    updateHour(hoursObj[hours]);

    if ((minsSecs >= 5730 && minsSecs < 6000) || (minsSecs >= 0 && minsSecs < 230)) {
        if (hours !== 24 && hours !== 0) {
            updateDesc('#oclock');
        }
    } else if (minsSecs >= 230 && minsSecs < 730) {
        updateDesc('#five, #past');
    } else if (minsSecs >= 730 && minsSecs < 1230) {
        updateDesc('#ten, #past');
    } else if (minsSecs >= 1230 && minsSecs < 1730) {
        updateDesc('#quarter, #past');
    } else if (minsSecs >= 1730 && minsSecs < 2230) {
        updateDesc('#twenty, #past');
    } else if (minsSecs >= 2230 && minsSecs < 2730) {
        updateDesc('#twenty, #five, #past');
    } else if (minsSecs >= 2730 && minsSecs < 3230) {
        updateDesc('#half, #past');
    } else if (minsSecs >= 3230 && minsSecs < 3730) {
        updateDesc('#twenty, #five, #to');
    } else if (minsSecs >= 3730 && minsSecs < 4230) {
        updateDesc('#twenty, #to');
    } else if (minsSecs >= 4230 && minsSecs < 4730) {
        updateDesc('#quarter, #to');
    } else if (minsSecs >= 4730 && minsSecs < 5230) {
        updateDesc('#ten, #to');
    } else if (minsSecs >= 5230 && minsSecs < 5730) {
        updateDesc('#five, #to');
    } else {
        updateDesc();
    }
}

function updateDesc(classes) {
    $('.desc').removeClass('active');
    $(classes).addClass('active');
}

function updateHour(classes) {
    $('.hr').removeClass('active');
    $(classes).addClass('active');
}

setInterval(function() {
    textClock();
}, 1000);

textClock();
