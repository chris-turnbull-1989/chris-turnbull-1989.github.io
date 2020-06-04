

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementById("delete");
var listItems = document.getElementById("myList").getElementsByTagName("li");
var icon = document.createElement("i");
icon.classList.add("fas", "fa-minus-circle", "icon");
icon.style.backgroundColor = "white";
icon.style.color = "red";
var liText = document.getElementById("myList").innerHTML;
var id;
var nodelist = ul.childNodes;
var ulNodeLength = ul.childNodes.length;
var nodes = [];
var index = 0;
var inputText;

icon.addEventListener("mouseover", function (event) {
	event.target.style.color = "blue";;
});
icon.addEventListener("mouseout", function (event) {
	event.target.style.color = "red";

});

function deleteListItem() {

console.log(nodes);
console.log(this.parentElement.childNodes[0]);
inputText = this.parentElement.childNodes[0];
// var inputTextlength = inputText.length;
// var inputSubstring = inputText.substring(0, (inputTextlength - 1));
// console.log(inputSubstring);


var index = nodes.indexOf(inputText.textContent);
// var textIndex = nodes.indexOf(inputText, 0);
console.log(nodes.indexOf(inputText.textContent));
console.log(index);
	// console.log(index);
	if (index > -1){
		nodes.splice(index, 1);
	}
	ul.removeChild(this.parentElement);
	// input.value = "";
	console.log(nodes);
	}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var icon = document.createElement("i");
	icon.classList.add("fas", "fa-minus-circle", "icon");
	icon.style.backgroundColor = "rgb(206, 206, 209);";
	icon.style.color = "black";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(icon);
	ul.appendChild(li);
	nodes.push(li.textContent);
	// console.log(typeof li.textContent);
	icon.addEventListener("mouseover", function (event) {
	event.target.style.color = "Red";
	});
	icon.addEventListener("mouseout", function (event) {
	event.target.style.color = "black";
	});
	icon.addEventListener("click", deleteListItem);
	

};



function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createAttribute();
	}
}

function addListAfterClick() {
	createAttribute();
	

}

function createAttribute() {
	if (nodes.includes(input.value)) {
		alert("Exists");
	} else if(inputLength() > 0){
		createListElement();
		input.value = "";
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);