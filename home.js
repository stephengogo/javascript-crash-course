console.log('hello');
console.log('hello');

// alert('hello this is stephen');

// Variables 
var b = 'smoothie';
console.log(b);

var someNumber = 45;
//console.log(someNumber);

// Manipulate DOM with Javascript 
// It's just a Fancy way of saying 
// change HTML with Javascript

// document.getElementById('someText').innerHTML = 'Hey There';
// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;


// Numbers in Javascript EASY
var num1 = 10;
num1 = num1 + 1;
console.log(num1);

// Functions 
//Create
function fun() {
    alert('this is a function')
}
// Call 
//fun()

// Lets create a function that takes in a name 
// and says hello followed by your name 

// For example 
// Name: "Stephen"
// Return "Hello Stephen"

function  greeting(name) {
    
    var result = 'Hello ' + name;
    console.log(result);
}
var name = prompt('what is your name?');
//greeting()



function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result); 
}
sumNumbers('10', 10) // prints 1010