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
let audio = new Audio();
audio.volume = 0.1;

let rec;
let ini = 0;

slideR[0].childNodes[1].valueAsNumber = 0;
audio.src = '1.mp3';

let music = {
    name: '1',
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

let crutch = () => { // тут костыль, Леша прости, устал искать решение...
    timeNowMusic[0].childNodes[1].innerHTML = music.minutes + ':' + music.seconds;
    changeIconPlay();
}

let calculatingSlider = (lengthMusic) => {
    slideR[0].childNodes[1].max = Math.round(lengthMusic) + 2;
    clearTimeout(rec);
    changeIconPause();
    audio.play();
    rec = setTimeout(function recINC() {
        if (slideR[0].childNodes[1].valueAsNumber >= parseInt(slideR[0].childNodes[1].max)) {
            sliderValueNow = 0;
            music.secondsOfMusicNow = parseInt(music.secondsOfMusicNow) + 1;
            music.minutesOfMusicNow = parseInt(audio.currentTime / 60, 10);
            music.secondsOfMusicNow = parseInt(audio.currentTime % 60);
            correctFormatTimeOfMisicNow();
            timeNowMusic[0].childNodes[1].innerHTML = music.minutesOfMusicNow + ':' + music.secondsOfMusicNow;
            setTimeout(crutch, 1000);
            clearTimeout(rec);
        } else {
            slideR[0].childNodes[1].valueAsNumber = slideR[0].childNodes[1].valueAsNumber + 1;
            sliderValueNow = slideR[0].childNodes[1].valueAsNumber;
            music.minutesOfMusicNow = parseInt(audio.currentTime / 60, 10);
            music.secondsOfMusicNow = parseInt(audio.currentTime % 60);
            correctFormatTimeOfMisicNow();
            timeNowMusic[0].childNodes[1].innerHTML = music.minutesOfMusicNow + ':' + music.secondsOfMusicNow;
            rec = setTimeout(recINC, 1000);
        }
    }, 0);
}

let correctFormatTimeOfMisicNow = () => {
    let minutesNow = String(music.minutesOfMusicNow).split('');
    let secondsNow = String(music.secondsOfMusicNow).split('');

    if (minutesNow.length <= 1) {
        music.minutesOfMusicNow = '0' + music.minutesOfMusicNow;
    }
    if (secondsNow.length <= 1 || secondsNow[0] == '0') {
        music.secondsOfMusicNow = '0' + music.secondsOfMusicNow;
    }
}

let correctFormatTimeOfMisic = () => {
    let minutes = String(music.minutes).split('');
    let seconds = String(music.seconds).split('');

    if (minutes.length <= 1) {
        music.minutes = '0' + minutes;
    }
    if (seconds.length <= 1 || seconds[0] == '0') {
        music.seconds = '0' + music.seconds;
    }
}

let musicInicialization = (name) => {
    audio.addEventListener('loadedmetadata', function() {
        music.name = audio.src;
        music.duration = audio.duration;
        music.minutes = parseInt(audio.duration / 60, 10);
        music.seconds = parseInt(audio.duration % 60);
    });

    let nameOfMusic = name + '.mp3';
    audio.src = nameOfMusic;
    return audio;
}

let startAndStopMusic = () => {
    allTimeMusic[0].childNodes[1].innerHTML = music.minutes + ':' + music.seconds;
    let a = 1;

    if (checkPlayOrPause == 0) {
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
        allTimeMusic[0].childNodes[1].innerHTML = music.minutes + ':' + music.seconds;
        myMusic.play();
        iconPlayMisic[0].style.display = 'none';
        iconPauseMusic[0].style.display = 'block';
        checkPlayOrPause = 1;
    }, 100);
}

let replayMusic = () => {
    clearTimeout(rec);
    slideR[0].childNodes[1].valueAsNumber = 0;
    calculatingSlider(audio.duration);
    let thisNameofMusic = statusOfMusicName[0].children[1].innerHTML;
    statusOfMusicName[0].children[0].innerHTML = 'Playing...';
    let myMusic = musicInicialization(thisNameofMusic);
    playClick(myMusic);
}

for (var i = 0; i < changeLevelMusic.length; i++) { // change level music
    changeLevelMusic[i].addEventListener('input', function() {
        audio.volume = changeLevelMusic[0].childNodes[1].value;
        music.volume = audio.volume;
    });
}

for (var i = 0; i < clickOnPlayList.length; i++) {
    clickOnPlayList[i].addEventListener('click', function(event) {
        clickOnPlayList[0].style.backgroundColor = '';
        event.target.style.backgroundColor = '#0F598C';
        arrayDivClick.push(event.target);
        for (var i = 0; i < arrayDivClick.length - 1; i++) {
            if (event.target != arrayDivClick[i]) {
                arrayDivClick[i].style.backgroundColor = '';
            }
        }
        statusOfMusicName[0].children[1].innerHTML = event.target.childNodes[1].innerHTML;
        slideR[0].childNodes[1].valueAsNumber = 0;
        let myMusic = musicInicialization(statusOfMusicName[0].children[1].innerHTML);
        changeIconPause();
        playClick(myMusic);
    });
}

for (var i = 0; i < playMusicButton.length; i++) { // play/pause
    playMusicButton[i].addEventListener('click', startAndStopMusic, false);
}

for (var i = 0; i < repeatMusic.length; i++) { //repeat
    repeatMusic[i].addEventListener('click', replayMusic, false);
}

for (var i = 0; i < slideR.length; i++) {
    slideR[i].addEventListener('input', function() {
        audio.currentTime = slideR[0].childNodes[1].valueAsNumber;
        calculatingSlider(audio.duration);
    }, false);
}