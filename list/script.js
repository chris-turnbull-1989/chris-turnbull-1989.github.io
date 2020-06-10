const button = document.getElementById("btn");
const input = document.getElementById("input");
var list = document.querySelector("ul");

let a;
function inputlength() {
    return input.value.length;
}
function deleteinput() {   
    list.removeChild(this.parentElement);
}
function checkList() {
    a = 0;
    let listArray = list.childNodes;
    if (list.childNodes.length === 1 && inputlength() > 0) {
        addListinput();
    } else if (list.childNodes.length > 1 && inputlength() > 0) {
        listArray.forEach(compareValue);
        function compareValue(item) {
            if (item.textContent === input.value) {
                return a = 1;
            } else {
                return a = 0;
            }
        }
        console.log(a);
        if (a === 1) {
            alert("item existed");
            a = 0;
        } else {
            addListinput();
            a = 0;
        }
    }
}
function addListinput() {
    var listinput = document.createElement("li")
    var icon = document.createElement("i");
    listinput.appendChild(document.createTextNode(input.value));
    listinput.appendChild(icon);
    list.appendChild(listinput);
    icon.classList.add("fas", "fa-minus-circle", "icon");
    input.value = "";
    icon.addEventListener("click", deleteinput);
}
function buttonClick(event) {
    if (inputlength() > 0)
        addListinput();
}
function onEnter() {
    if (inputlength() > 0 && event.keyCode === 13) {
        addListinput();
    }
}
button.addEventListener("click", checkList);
input.addEventListener("keypress", onEnter);