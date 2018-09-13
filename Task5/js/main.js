var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN"); // создали элемент спан
    var txt = document.createTextNode("\u00D7"); // создали узел с информацией ( крестик )
    span.className = "close"; // дали имя классу спана
    span.appendChild(txt); // вставили узел в наш спан
    myNodelist[i].appendChild(span); // вставили наш спан в дом дерево списка ли
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("edit"); // создали элемент спан
    var txt = document.createTextNode("Edit"); // создали узел с информацией ( крестик )
    span.className = "edit"; // дали имя классу спана
    span.appendChild(txt); // вставили узел в наш спан
    myNodelist[i].appendChild(span); // вставили наш спан в дом дерево списка ли
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var edit = document.getElementsByClassName("edit");
var i;
for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        var div = this.parentElement;
        console.log(div);
        //div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    } else
    if (ev.target.tagName === 'SPAN') {
        console.log('Элемент:', ev.path[1]);
        ev.path[1] = '';
      //  console.log(ev.target.parentElement.firstChild.textContent);
      //console.log(ev.target);
        let information = ev.target.parentElement.firstChild.textContent;
        document.getElementById("information_task").value = information;
        let btn = document.getElementById('save_button');
        let a = btn.addEventListener('click', function() {
            var text1 = document.getElementById('information_task').value;
            console.log(ev);
            ev.target.parentElement.firstChild.textContent = text1;
        });
        //ev.target.parentElement.firstChild.textContent = new_infromation; // замена значения
    }
}, false);

    let counter = 0;
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    li.id = "my_li"+ counter;
    var inputValue = document.getElementById("main_input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("mainUL").appendChild(li);
        //document.getElementById("my_span").appendChild(li);
    }
    document.getElementById("main_input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var edit_1 = document.createElement("SPAN");
    var txt_edit = document.createTextNode("Edit");
    edit_1.className = "edit";
    edit_1.appendChild(txt_edit);
    li.appendChild(edit_1);

    for (i = 0; i < edit_1.length; i++) {
        edit_1[i].onclick = function() {
            var div = this.parentElement;
            console.log(div);
        }
    }
    counter ++;
}