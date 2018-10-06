let myCanvas = document.getElementById('canvas'),
    context = myCanvas.getContext("2d");
let addRectangleButton = document.getElementsByClassName('add-figure');
let arrayOfRectangles = [];
let clearAllButton = document.getElementsByClassName('clear-all');
let deleteThisFigureButton = document.getElementsByClassName('delete-figure');
let dragTL = dragBL = dragTR = dragBR = false;
let closeEnough = 7; // радиус углов треугольника
let lengthOfRectangles = 0;
let i = 0,
    x, y;
let widthRectangle, heightRectangle;
let myRectangle;
let clickX, clickY;
let isDragging = false;

let checkLeftAngleOne = false;
let checkLeftAngleTwo = false;
let checkRightAngleOne = false;
let checkRightAngleTwo = false;
let checkBottomLeftAngleOne = false;
let checkBottomLeftAngleTwo = false;
let checkRightLeftAngleOne = false;
let checkRightLeftAngleTwo = false;


let addButton = addRectangleButton.length;
let clearButton = clearAllButton.length;
let deleteButton = deleteThisFigureButton.length;

myCanvas.onmousedown = canvasClick;
myCanvas.onmouseup = stopDragging;
myCanvas.onmouseout = stopDragging;
myCanvas.onmousemove = dragRectangle;

let previousSelectedRectangle;
let thisCLickRectangle = [];

let randomFromTo = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function RectangleObj(xRect, yRect, widthRect, heightRect, color) {
    this.x = xRect;
    this.y = yRect;
    this.width = widthRect;
    this.height = heightRect;
    this.isSelected = false;
    this.color = color;
}

function drawHandles(x, y, widthR, heightR) {
    drawCircle(x, y, closeEnough);
    drawCircle(x + widthR, y, closeEnough);
    drawCircle(x + widthR, y + heightR, closeEnough);
    drawCircle(x, y + heightR, closeEnough);
}

function dataRectangle(x, y, widthR, heightR) {
    context.globalAlpha = 0.85;
    context.beginPath();
    context.fillRect(x, y, widthR, heightR);
}

let drawRectangles = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lengthOfRectangles = arrayOfRectangles.length;

    for (i = 0; i < lengthOfRectangles; i++) {
        var rectangle = arrayOfRectangles[i];

        if (rectangle.isSelected) {
            context.fillStyle = 'pink';
            dataRectangle(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            drawHandles(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        } else {
            context.fillStyle = "black";
            dataRectangle(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            drawHandles(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        }
        context.fill();
        context.stroke();
    }

}

let addRectangle = () => {
    if (arrayOfRectangles.length >= 10) {
        alert("На холсте не может быть больше 10 фигур!");
    } else {
        x = randomFromTo(0, myCanvas.width - 20);
        y = randomFromTo(0, myCanvas.height - 20);

        widthRectangle = randomFromTo(60, 70); // диапазон (рандом высоты и ширины треугол-ка)
        heightRectangle = randomFromTo(60, 70);

        myRectangle = new RectangleObj(x, y, widthRectangle, heightRectangle, "black");
        arrayOfRectangles.push(myRectangle);
        drawRectangles();
    }
}

let clearCanvas = () => {
    arrayOfRectangles = [];
    drawRectangles();
}

function canvasClick(e) {

    clickX = e.pageX - e.target.offsetLeft;
    clickY = e.pageY - e.target.offsetTop;
    lengthOfRectangles = arrayOfRectangles.length;
    for (i = lengthOfRectangles - 1; i >= 0; i--) {
        myRectangle = arrayOfRectangles[i];

        if ((clickY > myRectangle.y) && (clickY < (myRectangle.y + myRectangle.height))) {
            if ((clickX > myRectangle.x) && (clickX < myRectangle.x + myRectangle.width)) {
                thisCLickRectangle = [];
                thisCLickRectangle.push(myRectangle);
                console.log(deleteThisFigureButton);
                deleteThisFigureButton[0].disabled = false;
                if (previousSelectedRectangle != null) previousSelectedRectangle.isSelected = false;
                previousSelectedRectangle = myRectangle;

                myRectangle.isSelected = true;
                drawRectangles();
                isDragging = true;

                return;
            }
        }
    }
}

function stopDragging() {
    isDragging = false;
    dragTL = dragTR = dragBL = dragBR = false;
}

function checkCloseEnough(p1, p2) {
    return Math.abs(p1 - p2) < closeEnough;
}

function drawCircle(x, y, radius) {
    context.fillStyle = "#FF0000";
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}

function dragRectangle(e) {
    if (isDragging == true) {

        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;

        checkLeftAngleOne = checkCloseEnough(x, previousSelectedRectangle.x);
        checkLeftAngleTwo = checkCloseEnough(y, previousSelectedRectangle.y);
        checkRightAngleOne = checkCloseEnough(x, previousSelectedRectangle.x + previousSelectedRectangle.width);
        checkRightAngleTwo = checkCloseEnough(y, previousSelectedRectangle.y);
        checkBottomLeftAngleOne = checkCloseEnough(x, previousSelectedRectangle.x);
        checkBottomLeftAngleTwo = checkCloseEnough(y, previousSelectedRectangle.y + previousSelectedRectangle.height);
        checkRightLeftAngleOne = checkCloseEnough(x, previousSelectedRectangle.x + previousSelectedRectangle.width);
        checkRightLeftAngleTwo = checkCloseEnough(y, previousSelectedRectangle.y + previousSelectedRectangle.height);

        (checkLeftAngleOne && checkLeftAngleTwo) ? dragTL = true: //левый верхний угол
            (checkRightAngleOne && checkRightAngleTwo) ? dragTR = true : //правый верхний угол
            (checkBottomLeftAngleOne && checkBottomLeftAngleTwo) ? dragBL = true : //нижний левый угол
            (checkRightLeftAngleOne && checkRightLeftAngleTwo) ? dragBR = true : console.log('Тащи'); //нижний правый угол

        if (dragTL) {
            dragTLCalc(previousSelectedRectangle);
            drawRectangles();
        } else if (dragTR) {
            dragTRCalc(previousSelectedRectangle);
            drawRectangles();
        } else if (dragBL) {
            dragBLCalc(previousSelectedRectangle);
            drawRectangles();
        } else if (dragBR) {
            dragBRCalc(previousSelectedRectangle);
            drawRectangles();
        } else {
            if (previousSelectedRectangle != null) {
                dragAndDrop(previousSelectedRectangle);
                drawRectangles();
            }
        }
    }
}

function dragAndDrop() {
    previousSelectedRectangle.x = x - previousSelectedRectangle.width / 2;
    previousSelectedRectangle.y = y - previousSelectedRectangle.height / 2;
}

function dragTLCalc(previousSelectedRectangle) {
    previousSelectedRectangle.width += previousSelectedRectangle.x - x;
    previousSelectedRectangle.height += previousSelectedRectangle.y - y;
    previousSelectedRectangle.x = x;
    previousSelectedRectangle.y = y;
}

function dragTRCalc(previousSelectedRectangle) {
    previousSelectedRectangle.width = Math.abs(previousSelectedRectangle.x - x);
    previousSelectedRectangle.height += previousSelectedRectangle.y - y;
    previousSelectedRectangle.y = y;
}

function dragBLCalc(previousSelectedRectangle) {
    previousSelectedRectangle.width += previousSelectedRectangle.x - x;
    previousSelectedRectangle.height = Math.abs(previousSelectedRectangle.y - y);
    previousSelectedRectangle.x = x;
}

function dragBRCalc(previousSelectedRectangle) {
    previousSelectedRectangle.width = Math.abs(previousSelectedRectangle.x - x);
    previousSelectedRectangle.height = Math.abs(previousSelectedRectangle.y - y);
}

let deleteThisRectangle = () => {
    lengthOfRectangles = arrayOfRectangles.length;

    for (i = 0; i < lengthOfRectangles; i++) {
        if (arrayOfRectangles[i] == thisCLickRectangle[0]) {
            thisCLickRectangle = [];
            arrayOfRectangles[i] = '';
            console.log(thisCLickRectangle);
            drawRectangles();
        }
    }
    deleteThisFigureButton[0].disabled = true;
}

for (i = 0; i < addButton; i++) {
    addRectangleButton[i].addEventListener('click', addRectangle, false);
}

for (i = 0; i < clearButton; i++) {
    clearAllButton[i].addEventListener('click', clearCanvas, false);
}

for (i = 0; i < deleteButton; i++) {
    deleteThisFigureButton[i].addEventListener('click', deleteThisRectangle, false);
}