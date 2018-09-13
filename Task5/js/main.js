let add_span = document.getElementById('span_add');
let cancel_btn = document.getElementById('cancel_button');
let all_clear = document.getElementById('clear_all');
let close = document.getElementsByClassName("close");
let i;
let list = document.querySelector('ul');

// Click on a close button to hide the current list item
let a = function() {
    [].forEach.call(document.querySelectorAll('#my_li'), function(e) { //удаление всех элементов
        e.parentNode.removeChild(e);
    });
}

all_clear.addEventListener('click', a);

for (i = 0; i < close.length; i++) { // кнопка закрыть определенный элемент
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

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
                let text_from_area = document.getElementById('information_task').value;
                ev.target.parentElement.firstChild.textContent = text_from_area;
                btn.removeEventListener('click', handler);
                cancel_function();
            }
            btn.addEventListener('click', handler);
        }
}, false);

let cancel_function = function() { //  hide widnow
    document.getElementById('form_edit').style.display = 'none';
    document.getElementById('mask').style.display = 'none';
}

let show_edit_from = function() { // show window
    document.getElementById('form_edit').style.display = 'block';
    document.getElementById('mask').style.display = 'block';
}

cancel_btn.addEventListener('click', cancel_function);

//  Добавить элемент в список задач
let newElement = function() {
    var li = document.createElement("li");
    li.id = "my_li";
    var inputValue = document.getElementById("main_input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("mainUL").appendChild(li);
    }
    document.getElementById("main_input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // символ крестика
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var edit_ = document.createElement("SPAN");
    var txt_edit = document.createTextNode("Edit");
    edit_.className = "edit";
    edit_.appendChild(txt_edit);
    li.appendChild(edit_);

    for (i = 0; i < edit_.length; i++) {
        edit_[i].onclick = function() {
            var div = this.parentElement;
            console.log(div);
        }
    }
}

add_span.addEventListener('click', newElement); // вызов ф-ии при клике "Добавить эл-т"