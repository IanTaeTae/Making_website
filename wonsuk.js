console.log("Welcome Won Suk Cho");

// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// log the date in the browser console
console.log('Date:', n);
// log the time in the browser console
console.log('Time:',time);

console.log("===QUOTES TO LIVE BY===\nParable of Talents\nNo pain, no gain!\nSacrifice worth doing\n=======================");

// setTimeout(startprogram, 1000)

function readInput(){
	var inputValue = document.getElementById("inputBox").value;

	console.log("Input value:", inputValue);
	 var displayArea = document.getElementById("displayArea");
	 displayArea.textContent = "Your name is: " + inputValue;
}

function startprogram(){
//START OF PROGRAM
//var = just temp , let = block scope , const = always constant
let choice = 1;
let input = 0, input1 = 0;

function ask(){
	return prompt("Input: ");
}

function debug(){
	console.log("---WORKS HERE---");
}

function palindrome(){
	input = ask();

	if(input==input.split('').reverse().join('')){
		alert("It is a palindrome!");
	}else{
		alert("It is not a palindrome");
	}
}

function fibonnacci(){
	input = parseInt(ask());

	let n1 = 0, n2 = 1, nextTerm;

	console.log('Fibonacci Series:');

	for (let i = 1; i <= input; i++) {
	    console.log(n1);
	    nextTerm = n1 + n2;
	    n1 = n2;
	    n2 = nextTerm;
	}
}

function anagram(){
	input = ask();
	input1 = ask();

	if(input.length == input1.length){
		if(input.split('').sort().join('') == input1.split('').sort().join('')){
			alert("It is an anagram!");
		}
	}else{
		alert("It is not an anagram!");
	}
}

while(choice!=0){
	choice = prompt("What is your choice?");

	switch(parseInt(choice)){
		case 1:
			palindrome();
			break;
		case 2:
			fibonnacci();
			break;
		case 3:
			anagram();
			break;
		case 0:
			console.log("Program shutting down...");
			break;
		default:
			alert("Invalid input!");
	}
}
//END OF PROGRAM
}