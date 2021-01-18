//Question 1
var pets = [
	{type: "cat", age: 5.5, },
	{type: "dog", age: 3.8, },
	{ type: "parrot", age: 4.0,},
];

var list = ["cat", "dog", "parrot"];
console.log(list);
 

for (var i = 0; i >= 4.0; i ++){

	var item = list [4];
	console.log(list);

    var item = list[i];
}

//Question 2

function logWord(word)  {
	console.log(word);
}

logWord("its cold outside");


var word = true;

typeof true;
console.log (typeof word)
///"boolean"

//Question 3


var body = document.querySelector("h2");
var button = document.querySelector("button");


function change (){
	var body = document.querySelector("h2")
	body.innerHTML = "updated heading";
	body.style.color = "blue";
}

button.onclick = change;




