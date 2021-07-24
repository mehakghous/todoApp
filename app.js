var input = document.getElementById("input")


var list = document.getElementById("ul");

function addTodo() {
    // var add_todo = document.getElementById("add-todo");
    var li = document.createElement('li');
    var liTxt = document.createTextNode(input.value);
    var dltBtn = document.createElement('i');
    dltBtn.setAttribute('class', 'fas fa-trash ');
    dltBtn.setAttribute('onclick', 'dltTodo(this)')
    var edtBtn = document.createElement('i');
    edtBtn.setAttribute('class', 'fa fa-edit ');
    edtBtn.setAttribute('onclick', 'editTodo(this)')
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.style.margin = "5px"
    if (input.value == "") {
        alert("enter any todo")
    } else {
        li.appendChild(check);
        li.appendChild(liTxt);
        li.appendChild(edtBtn);

        li.appendChild(dltBtn);

        list.appendChild(li);
        input.value = ""

    }
}

function dltTodo(e) {
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = ""
}

function editTodo(e) {
    // edtBtn.parentNode.nodeValue = input.value

    var value = e.parentNode.firstChild.nextSibling.nodeValue
    var editVal = prompt("enter edited value", value);
    e.parentNode.firstChild.nextSibling.nodeValue = editVal;

}