let addSpan = document.getElementById('span_add');
let cancelBtn = document.getElementById('cancel_button');
let allClear = document.getElementById('clear_all');
let close = document.getElementsByClassName("close");
let i;
let list = document.querySelector('ul');
let yesButton = document.getElementById('yes_button');
let noButton = document.getElementById('no_button');
let input = document.getElementById('main_input');
let inputValue = document.getElementById("main_input").value.trim();

input.addEventListener('change', function() {
    if (!input.value.trim()) {
        addSpan.disabled = true;
        addSpan.style.background = "#cccccc";
    } else {
        addSpan.style.background = " #d9d9d9";
        addSpan.disabled = false;
    }
});

window.onload = function() {
    let arrayValues = localStorage.getItem('arrayInputValues');
    arrayValues = JSON.parse(arrayValues) || []; // если null присваивает пустой массив
    arrayValues.forEach((value) => {
        newElement(value);
    });
}

let hide_ask_form = function() {
    document.getElementById('form_ask').style.display = 'none';
    document.getElementById('mask').style.display = 'none';
}

let checkAnswer = () => {
    [].forEach.call(document.querySelectorAll('#my_li'), function(e) { //удаление всех элементов
        e.parentNode.removeChild(e);
    });
    deleteAllValueToLocalStorage();
    document.getElementById('form_ask').style.display = 'none';
    document.getElementById('mask').style.display = 'none';
}

let a = () => {
    document.getElementById('form_ask').style.display = 'block';
    document.getElementById('mask').style.display = 'block';
    yesButton.addEventListener('click', checkAnswer);
}

yesButton.addEventListener('click', checkAnswer);
noButton.addEventListener('click', hide_ask_form);

allClear.addEventListener('click', a);

list.addEventListener('click', function(ev) { // редактирование
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    } else
    if (ev.target.className === 'edit') {
        let information = ev.target.parentElement.firstChild.textContent;
        document.getElementById("information_task").value = information;
        let btn = document.getElementById('save_button');
        show_edit_from();
        let handler = function() {
            let textFromArea = document.getElementById('information_task').value;
            ev.target.parentElement.firstChild.textContent = textFromArea;
            let indexLi = [].indexOf.call(ev.target.parentElement.parentElement.children, ev.target.parentElement); // ищем индекс в ul нешго li
            editValueToLocalStorage(indexLi, textFromArea);
            btn.removeEventListener('click', handler);
            cancel_function();
        }
        btn.addEventListener('click', handler);
    }
}, false);

let cancel_function = function() {
    document.getElementById('form_edit').style.display = 'none';
    document.getElementById('mask').style.display = 'none';
}

let show_edit_from = function() {
    document.getElementById('form_edit').style.display = 'block';
    document.getElementById('mask').style.display = 'block';
}

cancelBtn.addEventListener('click', cancel_function);

function addValueToLocalStorage(inputValue) {
    let arrayValues = localStorage.getItem('arrayInputValues');
    arrayValues = JSON.parse(arrayValues) || []; // если null присваивает пустой массив
    arrayValues.push(inputValue);
    arrayValues = JSON.stringify(arrayValues); // преобразует наш массив в строку
    localStorage.setItem('arrayInputValues', arrayValues);
}

function editValueToLocalStorage(index, value) { // редактирование
    let arrayValues = localStorage.getItem('arrayInputValues');
    arrayValues = JSON.parse(arrayValues) || [];
    arrayValues[index] = value;
    arrayValues = JSON.stringify(arrayValues);
    localStorage.setItem('arrayInputValues', arrayValues);
}

function deleteValueToLocalStorage(index) {
    let arrayValues = localStorage.getItem('arrayInputValues');
    arrayValues = JSON.parse(arrayValues) || [];
    arrayValues.splice(index, 1);
    arrayValues = JSON.stringify(arrayValues);
    localStorage.setItem('arrayInputValues', arrayValues);
}

function deleteAllValueToLocalStorage() {
    localStorage.removeItem('arrayInputValues');
}

function preNewElement() {
    var inputValue = document.getElementById("main_input").value;
    if (inputValue) {
        addValueToLocalStorage(inputValue);
        newElement(inputValue);
    } else {
        alert("You must write something!");
    }
}

//  Добавить элемент в список задач
let newElement = function(inputValue) {
    var li = document.createElement("li");
    li.id = "my_li";

    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    document.getElementById("mainUL").appendChild(li);
    document.getElementById("main_input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let closeLength = close.length;
    for (i = 0; i < closeLength; i++) {
        close[i].onclick = function(ev) {
            let myUl = document.getElementById('mainUL');
            let indexLi = [].indexOf.call(myUl.children, this.parentElement); // ищем индекс в ul нешго li
            deleteValueToLocalStorage(indexLi);
            this.parentElement.remove();
        }
    }

    var edit = document.createElement("SPAN");
    var txtEdit = document.createTextNode("\u270E");
    edit.className = "edit";
    edit.appendChild(txtEdit);
    li.appendChild(edit);

    let editLength = edit.length;
    for (i = 0; i < editLength; i++) {
        edit[i].onclick = function() {

            var div = this.parentElement;
            console.log(div);
        }
    }
}

addSpan.addEventListener('click', preNewElement);