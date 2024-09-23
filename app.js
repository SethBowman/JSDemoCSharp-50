//using let
let greeting = "Hello";
let greetingTwo = 'Hello World';
let greetingThree = `Hello`;

//template string
console.log(`My computer says ${greeting} and ${greetingTwo}!`);

let number = 2.5;
let boolean = false;

//using var
if(true) {
    var language = "JS";
}

console.log(language);

//using const
const birthYear = 1994;
const isHuman = true;

//get user input
let response = prompt("What is your name?");

//alert(`Hello, ${response}!`)

//dom manipulation
document.getElementById("title").innerHTML = `Hello, ${response}!`;
