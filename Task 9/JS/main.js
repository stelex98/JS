let name = 'Player';
let currentPlayer = 'player';
let userCity, wordComputer = 'Астрахань';
let lastCity = 'Ярославль';
let firstSymbol, lastSymbolU, lastSymbolC, charLast = 'А';
let checkNameEmpty = '';
let tegPCity = 'P';

let arrayGameLength, arrayGameLengthNow, arrayCityLength, arrayFindLength = 100;
let firstStep, rand, result, i = 0;
let resultFindArrayGame, resultFindArrayCity = 1;
let myMap = 0;
var myGeocoder = 0;
let recognition = 0;
let clearTime = 0;


let buttonConfirm = document.getElementsByClassName('confirm-action')[0];
let buttonEndGame = document.getElementsByClassName('compelte-game')[0];
let buttonReturnGame = document.getElementsByClassName('repeat-game')[0];
let buttonSurrender = document.getElementsByClassName('surrender')[0];
let buttonVoice = document.getElementsByClassName('voice')[0];

let dataOfInput = document.getElementsByClassName('validate')[0];
let listSityUserBlock = document.getElementsByClassName('list-city-user')[0];
let listSityComputerBlock = document.getElementsByClassName('list-city-computer')[0];
let nameUser = document.getElementsByClassName('name-user')[0];

let errorLastSymbol = ['Ь', 'Ъ'];
let constArrayCity = [];
let arrayGame = [];
let arrayCity = ['Астрахань', 'Абакан', 'Анапа', 'Азов', 'Ангарск',
    'Барнаул', 'Белгород', 'Батайск', 'Брянск', 'Бор',
    'Воронеж', 'Вологда', 'Волгоград', 'Владивосток', 'Владимир',
    'Гатчина', 'Георгиевск', 'Грозный', 'Губкин', 'Гуково',
    'Дзержинск', 'Дмитров', 'Долгопрудный', 'Домодедово', 'Дубна',
    'Евпатория', 'Ейск', 'Екатеринбург', 'Елец', 'Ессентуки',
    'Железногорск', 'Жигулевск', 'Жуковский',
    'Заречный', 'Зеленогорск', 'Зеленодольск', 'Златоуст',
    'Иваново', 'Ижевск', 'Иркутск', 'Ишим', 'Ишимбай',
    'Йошкар-Ола',
    'Казань', 'Калининград', 'Калуга', 'Когалым', 'Кострома',
    'Лениногорск', 'Лесосибирск', 'Липецк', 'Лиски', 'Люберцы',
    'Магадан', 'Магнитогорск', 'Махачкала', 'Москва', 'Мурманск',
    'Нефтеюганск', 'Нижневартовск', 'Новосибирск', 'Норильск', 'Ноябрьск',
    'Октябрьский', 'Омск', 'Орел', 'Оренбург', 'Орск',
    'Пенза', 'Пермь', 'Петрозаводск', 'Прокопьевск', 'Псков',
    'Ревда', 'Ржев', 'Рубцовск', 'Рыбинск', 'Рязань',
    'Самара', 'Севастополь', 'Смоленск', 'Сочи', 'Ставрополь',
    'Тобольск', 'Тверь', 'Томск', 'Тула', 'Тюмень',
    'Узловая', 'Ульяновск', 'Уссурийск', 'Уфа',
    'Феодосия', 'Фрязино',
    'Хабаровск', 'Ханты-Мансийск', 'Хасавюрт', 'Химки',
    'Чебоксары', 'Челябинск', 'Череповец', 'Черкесск', 'Черногорск',
    'Шадринск', 'Шали', 'Шахты', 'Шуя',
    'Щекино', 'Щелково',
    'Электросталь', 'Элиста', 'Энгельс',
    'Южно-Сахалинск', 'Юрга',
    'Якутск', 'Ялта', 'Ярославль'
];

let oneMinute = 60 * 1, // 60 секунд, обратный отсчет минута
    display = document.querySelector('#time');


ymaps.ready(function() {

    showCity();
});

buttonEndGame.addEventListener('click', endTheGame);
buttonReturnGame.addEventListener('click', returnToStartGame);
buttonSurrender.addEventListener('click', SurrenderGame);
buttonVoice.addEventListener('click', startRecognizer);
buttonConfirm.addEventListener('click', userPart);

function showCity() {

    myGeocoder = ymaps.geocode("Москва");
    myGeocoder.then(
        function(res) {
            myMap = new ymaps.Map("first_map", {
                center: res.geoObjects.get(0).geometry.getCoordinates(),
                zoom: 10
            });
        },
        function(err) {
            alert('Ошибка');
        }
    );
}

window.onload = startGame();

function addedName(name) {

    nameUser.innerHTML = name;
}

function changedLocationOnMap(myGeocoder) {

    myGeocoder.then(
        function(res) {
            myMap.setCenter(res.geoObjects.get(0).geometry.getCoordinates());
            myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: res.geoObjects.get(0).geometry.getCoordinates()
                },
                properties: {
                    iconContent: 'Ваш город',
                    hintContent: 'А тут котики :3'
                }
            }, {
                preset: 'islands#blackStretchyIcon',
                draggable: true
            });
            myMap.geoObjects.add(myGeoObject)
        },
        function(err) {
            alert('Ошибка');
        }
    );
}

function startGame() { // начало игры ( пишем имя и рандомим первый ход)

    name = prompt("Введите ваше имя: ", "Артур");
    checkNameEmpty = name.trim().length;
    if ((name == null) || (checkNameEmpty === 0)) {
        name = 'Player';
        addedName(name);
    } else {
        addedName(name);
    }
    constArrayCity = arrayCity.slice();
    firstStep = Math.abs(randomStepOfPlayer(0, 1)); // 0 - player, 1 - computer
    computerAndPlayerSteps(firstStep);

}

function randomStepOfPlayer(min, max) { // рандомим кто ходит

    rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function computerAndPlayerSteps(firstStep) {

    if (firstStep) {
        currentPlayer = 'player';
        unlockFunctionalOfPlayer();
        clearInterval(clearTime);
        startTimer(oneMinute, display, 'Компьютер');
    } else {
        currentPlayer = 'computer';
        disableFunctionalOfPlayer();
        clearInterval(clearTime);
        startTimer(oneMinute, display, name);
        setTimeout(computerPart, 3000);
    }
}

function userPart() {

    userCity = dataOfInput.value;
    if (arrayGame.length == 0) {
        result = find(arrayCity, userCity);

        if (result != -1) {
            arrayGame.push(userCity);
            addCityToDiv(userCity);
            arrayCity.splice(result, 1);
            myGeocoder = ymaps.geocode(userCity);
            changedLocationOnMap(myGeocoder);
            clearInterval(clearTime);
            startTimer(oneMinute, display, 'Computer');
            disableFunctionalOfPlayer();
            setTimeout(computerPart, 3000);
        } else {
            alert("Такого города не сущетсвует");
        }
    } else {
        lastCity = arrayGame[arrayGame.length - 1];
        console.log("Последний город: ", lastCity);

        firstSymbol = userCity.charAt(0).toUpperCase();
        lastSymbolU = checkErrorsLastSymbol(lastCity).toUpperCase();

        if (lastSymbolU == firstSymbol) {
            resultFindArrayGame = find(arrayGame, userCity);
            resultFindArrayCity = find(arrayCity, userCity);

            if ((resultFindArrayGame != -1) || (resultFindArrayCity == -1)) {
                alert("Такой город был введен или его не существует");
            } else {
                arrayGame.push(userCity);
                addCityToDiv(userCity);
                myGeocoder = ymaps.geocode(userCity);
                changedLocationOnMap(myGeocoder);
                arrayCity.splice(resultFindArrayCity, 1);
                currentPlayer = "player";
                disableFunctionalOfPlayer();
                clearInterval(clearTime);
                startTimer(oneMinute, display, 'Computer');
                setTimeout(computerPart, 3000); // 3000 мс - задержка ответа от компьютера
            }
        } else {
            alert("Проверьте символ");
        }
    }
    currentPlayer = "player";
}

function computerPart() {

    if (currentPlayer == "computer") { //если игрок первый то рандомим слово
        wordComputer = randomStepOfPlayer(0, arrayCity.length);
        lastCity = arrayGame[arrayGame.length - 1];
        arrayGameLength = arrayGame.length;

        if (arrayGameLength == 0) {
            result = find(arrayCity, arrayCity[wordComputer]);

            if (result != -1) {
                arrayGame.push(arrayCity[wordComputer]);
                myGeocoder = ymaps.geocode(arrayCity[wordComputer]);
                changedLocationOnMap(myGeocoder);
                addCityToDiv(arrayCity[wordComputer], 'computer');
                arrayCity.splice(result, 1);
            } else {
                alert("Такого города не существует");
            }
        }
    } else {
        arrayGameLengthNow = arrayGame.length;
        lastCity = arrayGame[arrayGame.length - 1];
        lastSymbolC = checkErrorsLastSymbol(lastCity).toUpperCase();
        arrayCityLength = arrayCity.length;

        for (i = 0; i < arrayCityLength; i++) {

            if (arrayCity[i].charAt(0).toUpperCase() == lastSymbolC) {
                result = find(arrayCity, arrayCity[i]);
                arrayGame.push(arrayCity[i]);
                addCityToDiv(arrayCity[i], 'computer');
                myGeocoder = ymaps.geocode(arrayCity[i]);
                changedLocationOnMap(myGeocoder);

                arrayCity.splice(result, 1);
                break;
            }
        }

        if (arrayGameLengthNow == arrayGame.length) {
            alert('Компьютер проиграл');
            returnToStartGame();
        }
    }
    clearInterval(clearTime);
    startTimer(oneMinute, display, 'Computer');
    unlockFunctionalOfPlayer();
}

function addCityToDiv(city, currentPearson) {

    tegPCity = document.createElement('p');
    tegPCity.innerHTML = city;
    listSityUserBlock.appendChild(tegPCity);
    if (currentPearson == 'computer') {
        listSityComputerBlock.appendChild(tegPCity);
    } else {
        listSityUserBlock.appendChild(tegPCity);
    }
}

function checkErrorsLastSymbol(wordUserComputer) {

    charLast = wordUserComputer.slice(-1).toUpperCase();

    if ((charLast == errorLastSymbol[0]) || (charLast == errorLastSymbol[1])) {
        charLast = wordUserComputer.slice(-2, -1);
    } else {
        charLast = wordUserComputer.slice(-1);
    }
    return charLast;
}

function find(array, value) {

    arrayFindLength = array.length;
    for (i = 0; i < arrayFindLength; i++) {
        if (array[i] == value) return i;
    }

    return -1;
}

function returnToStartGame() {

    arrayCity = JSON.parse(JSON.stringify(constArrayCity));
    arrayGame = [];
    dataOfInput.value = '';

    removeChildFromComputerBlock();
    removeChildFromUserBlock();

    unlockFunctionalOfPlayer();
    startGame();
}

function endTheGame() {

    clearInterval(clearTime);
    dataOfInput.value = '';
    disableFunctionalOfPlayer();

    removeChildFromComputerBlock();
    removeChildFromUserBlock();
}

function removeChildFromComputerBlock() {

    while (listSityComputerBlock.firstChild) {
        listSityComputerBlock.removeChild(listSityComputerBlock.firstChild);
    }
}

function removeChildFromUserBlock() {

    while (listSityUserBlock.firstChild) {
        listSityUserBlock.removeChild(listSityUserBlock.firstChild);
    }
}

function SurrenderGame() {

    clearInterval(clearTime);
    endTheGame();
    disableFunctionalOfPlayer();
    alert("Победил компьютер!");
}

function disableFunctionalOfPlayer() {

    buttonConfirm.disabled = true;
    buttonEndGame.disabled = true;
}

function unlockFunctionalOfPlayer() {

    buttonConfirm.disabled = false;
    buttonEndGame.disabled = false;
}


function startRecognizer() {

    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.lang = 'ru';

        recognition.onresult = function(event) {
            result = event.results[event.resultIndex];
            dataOfInput.value = result[0].transcript
        };

        recognition.start();
    } else {
        alert('webkitSpeechRecognition не поддерживается :(');
    }
}

function startTimer(duration, display, currentPlayer) {

    let timer = duration,
        minutes, seconds;
    clearTime = setInterval(function() {
        minutes = parseInt(timer / 60, 10) // 60 секунд, в 10й сс
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            alert("Время вышло!, победил игрок: " + currentPlayer);
            clearInterval(clearTime);
            timer = duration;
        }
    }, 1000); // 1000 - вызов раз в 1000мс нашу функцию для отсчета времени
}