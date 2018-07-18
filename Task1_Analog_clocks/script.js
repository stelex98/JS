var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');
var date = new Date();
var hour = date.getHours() % 12; // 0 - 23 )
var minute = date.getMinutes();
var second = date.getSeconds();
var time = document.querySelector('#time');
var perem;
var timeoutID;

function initClock() {
    date = new Date();
    hour = date.getHours() % 12; // 0 - 23
    minute = date.getMinutes();
    second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60 каждый час - 30 deg
    var minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 deg. 6 / 60 каждая минута 6 def
    var secondDeg = second * 6; // 360 / 60

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

    timeoutID = setTimeout(initClock, 1000);

    /*let check = time.value[3] + time.value[4];
    console.log(typeof(check));
    */
    console.log(time);
   /* if (time.value != '') {
        clearTimeout(timeoutID);
    }*/
};

time.oninput = function() {
    minutes = parseInt(time.value[3] + time.value[4]);
    hours = parseInt(time.value[0] + time.value[1]);
    clearTimeout(timeoutID);
    clearTimeout(perem);
    changeTime();
};

function changeTime() {

        second = second + 1;
        if (second >= 60) {
            second = 0;
            minutes = minutes + 1;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours = hours + 1;
        }
        var minuteDeg = (minutes * 6) + (0.1 * second);
        var hourDeg = (hours * 30) + (0.5 * minutes);
        var secondDeg = second * 6; // 360 / 60

        hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
        minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
        secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';
        perem = setTimeout(changeTime, 1000);

}

initClock();