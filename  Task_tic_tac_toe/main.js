var ceil = document.getElementsByClassName("game-item"), // ищем все ячейки
    reset = document.getElementById("reset-game"), // ресет
    changename = document.getElementById("change-name");
message = document.getElementById("message"), // сообщение
    player = "", // первый игрок х
    stepCount = 0, // счетчик шагов наш
    checkwinfirstplayer = true,
    checkwinsecondplayer = false,
    firstchecknumber = 0,
    Namefirstplayer = "",
    Namesecondplayer = "",
    winCombinations = [ // все победные комбинации
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ],

    dataX = [], // значения игроков в ячейках
    dataO = [];


entername();
checkemptyname();
startgame();

function startgame() {
    firstchecknumber = randomgame(1, 2);

    if (firstchecknumber == 1) {
        message.innerText = "Ходит игрок " + Namefirstplayer;
        player = "X";
        checkwinfirstplayer = true;
        checkwinsecondplayer = false;
    } else {
        message.innerText = "Ходит игрок " + Namesecondplayer;
        player = "O";
        checkwinsecondplayer = true;
        checkwinfirstplayer = false;
    }

    for (var i = 0; i < ceil.length; i++) { // пройдем по всем элементам
        ceil[i].addEventListener("click", currentStep); // добавим событие "клик" и вызывается соо-я фунция
    }
}

function entername() {
    Namefirstplayer = prompt("Имя первого игрока:");
    Namesecondplayer = prompt("Имя второго игрока:");
}

function checkemptyname() {
    if (Namefirstplayer == null || Namefirstplayer == "") {
        Namefirstplayer = "player_1";
    }
    if (Namesecondplayer == null || Namesecondplayer == "") {
        Namesecondplayer = "player_2";
    }
}

function currentStep() {
    var num = +this.getAttribute("data-ceil"); // сразу преобразуем в число и получаем число атрибута

    if (!this.textContent) { // проверка на наличие числа (если нет никакого содержимого)
        this.innerText = player;
        player === "X" ?
            dataX.push(num) && this.classList.add("x") : // num - число ячейки (добавляем в массив)
            dataO.push(num) && this.classList.add("o");
        if (
            (dataO.length > 2 || dataX.length > 2) && // проверка на заполненность ячеек больше 2х
            (checkWin(dataO, num) || checkWin(dataX, num)) // проверка на победу
        ) {
            for (var i = 0; i < ceil.length; i++) {
                ceil[i].removeEventListener("click", currentStep); // удаляем событие клик, при победе одног оз игроков
            }
            if ((checkwinfirstplayer == true) && (checkwinsecondplayer == false)) {
                return (message.innerText = "Победил игрок " + Namefirstplayer);
            } else
            if ((checkwinsecondplayer == true) && (checkwinfirstplayer == false)) {
                return (message.innerText = "Победил игрок " + Namesecondplayer);
            }
        }
        changePlayer();
        stepCount++;
        if (stepCount === 9) {
            (message.innerText = "Ничья");
        } else {
            if (player == "X") {
                message.innerText = "Ходит игрок " + Namefirstplayer;
                checkwinfirstplayer = true;
                checkwinsecondplayer = false;
            } else {
                message.innerText = "Ходит игрок " + Namesecondplayer;
                checkwinfirstplayer = false;
                checkwinsecondplayer = true;
            }
        }

    }
}

function changePlayer() {
    player === "X" ? (player = "O") : (player = "X"); // проверка игрока
}

function randomgame(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function resetall() {
    // сбасывание
    for (var i = 0; i < ceil.length; i++) {
        ceil[i].innerText = "";
    }
    dataO = [];
    dataX = [];
    firstchecknumber = randomgame(1, 2);
    stepCount = 0;
    if (firstchecknumber == 1) {
        message.innerText = "Ходит игрок " + Namefirstplayer;
        player = "X";
        checkwinfirstplayer = true;
        checkwinsecondplayer = false;
        for (var i = 0; i < ceil.length; i++) {
            ceil[i].addEventListener("click", currentStep);
            ceil[i].classList.remove("x", "o");
        }
    } else {
        message.innerText = "Ходит игрок " + Namesecondplayer;
        player = "O";
        heckwinfirstplayer = true;
        checkwinsecondplayer = false;
        for (var i = 0; i < ceil.length; i++) {
            ceil[i].addEventListener("click", currentStep);
            ceil[i].classList.remove("x", "o");
        }
    }

}

reset.addEventListener("click", resetall);

changename.addEventListener("click", function() {
    resetall();
    entername();
    checkemptyname();
    startgame();
});

function checkWin(arr, number) { // передается массив игрока и число ячейки
    for (var w = 0, wLen = winCombinations.length; w < wLen; w++) { // проходим по победным циклам
        var someWinArr = winCombinations[w], //
            count = 0;
        if (someWinArr.indexOf(number) !== -1) { // берем массив с значением кликнутой ячейки
            for (var k = 0, kLen = someWinArr.length; k < kLen; k++) { // проходим по всем переменным выбранного нам массива
                if (arr.indexOf(someWinArr[k]) !== -1) { // сравниваем каждое значение дата0 или датах  с выбранным победным массивом
                    count++;
                    if (count === 3) {
                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}