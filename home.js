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

function greeting(name) {
    var result = 'Hello ' + name;
    console.log(result);
}
//var name = prompt('what is your name?');
//greeting()

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result); 
}
//sumNumbers('10', 10) // prints 1010

// While loops

var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}

for ( let num = 0; num < 100; num++){
    console.log(num);
}

// Data types 
let yourAge = 18; // numbner 
let yourName = 'bob'// String

let name = {first: 'Jane', last: 'Doe'} // object 
let truth = false; // boolean 
let groceries = ['apple', 'banana', 'oranges'] // array 
let random; // undefined 
let nothing = null; // value null

// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\nappple';

console.log(fruit.length); // 6
console.log(fruit.indexOf('nan')); // 2
console.log(fruit.slice(2,5)); // [2, 5) nan
console.log(fruit.replace('ban', '123')); // 123ana
console.log(fruit.toUpperCase()); // BANANA
console.log(fruit.toLowerCase()); // banana
console.log(fruit[2]); // n
console.log(fruit.split(',')); // split by a comma ["banana"]
console.log(fruit.split('')); // split by a character ["b", "a", "n", "a", "n", "a"]

// Array 
let fruits = ['banana', 'apple', 'orange', 'pineapples']
fruits = new Array('banana', 'apple', 'orange', 'pineapples')

console.log(fruit[2]);

fruits[0] = 'pear';
console.log(fruits)

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

// array common methods 
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item 
console.log(fruits.push('blackberries'), fruits); // apends 
console.log(fruits[4]); // undefined 
fruits[fruits.length] = 'new fruit';
console.log(fruits)
fruits.shift(); // remove first element from an array 
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array 

let vegetables = ['asparagus', 'tomato', 'brocolo'];
let allGroceries = fruits.concat(vegetables); // combine arrays 
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
let someNumbers = [5, 10, 2, 25, 3, 255, 1];
console.log(someNumbers.sort(function(a,b) {return a-b})); // sort ascending order 
console.log(someNumbers.sort(function(a,b) {return b-a})); // sort decending order 

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);


