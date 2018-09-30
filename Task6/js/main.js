let playMusicButton = document.getElementsByClassName('playMusic');
let statusOfMusic = document.getElementsByClassName('status-music');
let iconPlayMisic = document.getElementsByClassName('icon-play');
let iconPauseMusic = document.getElementsByClassName('pauseMusic');
let checkPlayOrPause = 0;
let changeLevelMusic = document.getElementsByClassName('change-level-music');
let clickOnPlayList = document.getElementsByClassName('playlist');
let statusOfMusicName = document.getElementsByClassName('status-music');
let repeatMusic = document.getElementsByClassName('repeatMusic');
let allTimeMusic = document.getElementsByClassName('all-time-music')
let timeNowMusic = document.getElementsByClassName('time-now-music')
let slideR = document.getElementsByClassName('slider');

let sliderValueNow = 0;
let arrayDivClick = [];
let finishMusic = 0;
let audio = new Audio();

let lengthSlideronPage = slideR.length;
let repeatMusicLengthOnPage = repeatMusic.length;
let playMusicButtonOnPage = playMusicButton.length;
let clickOnPlayListOnPage = clickOnPlayList.length;
let changeLevelMusicOnPage = changeLevelMusic.length;

let currentValueSlider;
let maxValueSlider;

let minutes;
let seconds;
let minutesNow;
let secondsNow;

let rec;
let ini = 0;
let i;

let thisNameofMusic;
let myMusic;
let myMusicInic;

slideR[0].childNodes[1].valueAsNumber = 0;
audio.src = 'audio/music 1.mp3';
audio.volume = 0.1;

let music = {
    name: 'music 1',
    minutes: '00',
    seconds: '47',
    duratioN: '',
    volume: '',
    step: '',
    minutesOfMusicNow: '',
    secondsOfMusicNow: '',
};


let changeIconPlay = () => {
    iconPlayMisic[0].style.display = 'block';
    iconPauseMusic[0].style.display = 'none';
    checkPlayOrPause = 0;
    statusOfMusicName[0].children[0].innerHTML = 'Paused...';
}

let changeIconPause = () => {
    iconPlayMisic[0].style.display = 'none';
    iconPauseMusic[0].style.display = 'block';
    checkPlayOrPause = 1;
    statusOfMusicName[0].children[0].innerHTML = 'Playing...';
}

let finishTimeMusic = () => {
    timeNowMusic[0].childNodes[1].innerHTML = `${music.minutes}:${music.seconds}`;
    changeIconPlay();
}

let calculatingSlider = (lengthMusic) => {
    slideR[0].childNodes[1].max = Math.round(lengthMusic) + 1; // учет погрешности в 1 секунду
    clearTimeout(rec);
    changeIconPause();
    audio.play();
    rec = setTimeout(function recINC() {
        music.minutesOfMusicNow = parseInt(audio.currentTime / 60, 10);
        music.secondsOfMusicNow = parseInt(audio.currentTime % 60);

        currentValueSlider = slideR[0].childNodes[1].valueAsNumber;
        maxValueSlider = parseInt(slideR[0].childNodes[1].max);
        if (currentValueSlider >= maxValueSlider) {
            sliderValueNow = 0;
            music.secondsOfMusicNow = parseInt(music.secondsOfMusicNow) + 1;
            setTimeout(finishTimeMusic, 0);
            clearTimeout(rec);
        } else {
            console.log(slideR[0].childNodes[1].valueAsNumber);
            slideR[0].childNodes[1].valueAsNumber = slideR[0].childNodes[1].valueAsNumber + 1;
            sliderValueNow = slideR[0].childNodes[1].valueAsNumber;
            rec = setTimeout(recINC, 1000);
        }
        correctFormatTimeOfMisicNow();
        timeNowMusic[0].childNodes[1].innerHTML = `${music.minutesOfMusicNow}:${music.secondsOfMusicNow}`;
    }, 0);
}

let correctFormatTimeOfMisicNow = () => {
    minutesNow = String(music.minutesOfMusicNow).split('');
    secondsNow = String(music.secondsOfMusicNow).split('');

    if (minutesNow.length <= 1) {
        music.minutesOfMusicNow = `0${music.minutesOfMusicNow}`;
    }
    if (secondsNow.length <= 1 || secondsNow[0] == '0') {
        music.secondsOfMusicNow = `0${music.secondsOfMusicNow}`;
    }
}

let correctFormatTimeOfMisic = () => {
    minutes = String(music.minutes).split('');
    seconds = String(music.seconds).split('');

    if (minutes.length <= 1) {
        music.minutes = `0${minutes}`;
    }
    if (seconds.length <= 1 || seconds[0] == '0') {
        music.seconds = `0${music.seconds}`;
    }
}

let musicInicialization = (name) => {
    audio.addEventListener('loadedmetadata', function() {
        music.name = audio.src;
        music.duration = audio.duration;
        music.minutes = parseInt(audio.duration / 60, 10);
        music.seconds = parseInt(audio.duration % 60);
    });

    let nameOfMusic = `audio/${name}.mp3`;
    audio.src = nameOfMusic;
    return audio;
}

let startAndStopMusic = () => {
    allTimeMusic[0].childNodes[1].innerHTML = `${music.minutes}:${music.seconds}`;

    if (!checkPlayOrPause) {
        calculatingSlider(audio.duration);
        changeIconPause();
        slideR[0].childNodes[1].valueAsNumber = sliderValueNow;
    } else {
        audio.pause();
        clearTimeout(rec);
        slideR[0].childNodes[1].valueAsNumber = sliderValueNow;
        changeIconPlay();
    }
}

let playClick = (myMusic) => {
    myMusic.addEventListener('loadedmetadata', function() {
        music.name = myMusic.src;
        music.length = myMusic.duration;
        calculatingSlider(audio.duration);
    });
    setTimeout(function() {
        correctFormatTimeOfMisic();
        allTimeMusic[0].childNodes[1].innerHTML = `${music.minutes}:${music.seconds}`;
        myMusic.play();
        iconPlayMisic[0].style.display = 'none';
        iconPauseMusic[0].style.display = 'block';
        checkPlayOrPause = 1;
    }, 100);
}

let replayMusic = () => {
    clearTimeout(rec);
    calculatingSlider(audio.duration);
    thisNameofMusic = statusOfMusicName[0].children[1].innerHTML;
    statusOfMusicName[0].children[0].innerHTML = 'Playing...';
    myMusic = musicInicialization(thisNameofMusic);
    playClick(myMusic);
    slideR[0].childNodes[1].valueAsNumber = 0;
}

for ( i = 0; i < changeLevelMusicOnPage; i++) { // change level music
    changeLevelMusic[i].addEventListener('input', function() {
        audio.volume = changeLevelMusic[0].childNodes[1].value;
        music.volume = audio.volume;
    });
}

for ( i = 0; i < clickOnPlayListOnPage; i++) {
    clickOnPlayList[i].addEventListener('click', function(event) {
        clickOnPlayList[0].style.backgroundColor = '';
        event.target.style.backgroundColor = '#0F598C';
        arrayDivClick.push(event.target);
        for ( i = 0; i < arrayDivClick.length - 1; i++) {
            if (event.target != arrayDivClick[i]) {
                arrayDivClick[i].style.backgroundColor = '';
            }
        }
        statusOfMusicName[0].children[1].innerHTML = event.target.childNodes[1].innerHTML;
        slideR[0].childNodes[1].valueAsNumber = 0;
        myMusicInic = musicInicialization(statusOfMusicName[0].children[1].innerHTML);
        changeIconPause();
        playClick(myMusicInic);
    });
}


for ( i = 0; i < playMusicButtonOnPage; i++) { // play/pause
    playMusicButton[i].addEventListener('click', startAndStopMusic, false);
}

for ( i = 0; i < repeatMusicLengthOnPage; i++) { //repeat
    repeatMusic[i].addEventListener('click', replayMusic, false);
}

for ( i = 0; i < lengthSlideronPage; i++) {
    slideR[i].addEventListener('input', function() {
        currentValueSlider = slideR[0].childNodes[1].valueAsNumber;
        if ((currentValueSlider - 1 >= parseInt(audio.duration)) || (currentValueSlider - 4 >= parseInt(audio.duration))) { // проверка на граничные значения мелодии с учетом погрешности
            clearTimeout(rec);
            timeNowMusic[0].childNodes[1].innerHTML = `${music.minutes}:${music.seconds}`;
            changeIconPlay();
            audio.pause();
            return 0;
        }
        audio.currentTime = slideR[0].childNodes[1].valueAsNumber;
        calculatingSlider(audio.duration);
    }, false);
}