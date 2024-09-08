// callback function
function firstFunction(a){
    console.log(a);
}
console.log("hello");

function cal(a,b,callback){
    let sum=a+b;
    console.log(sum);
   // console.log(callback);
    callback(sum);
}
 cal(2,4,firstFunction)
 // settime out
 
 function first(a,b){
    let multi = a*b;
    console.log (multi);
 }
first(2,2);
 
function SECOND()

{
console.log(" i am 10 years old ");

}

setTimeout(SECOND,3000);

// Get Data:
//module.exports = task1;
//const task1 = require('./practice');

//console.log(task1);

// practice.js
const obj = {
    abc: 'abc',
    name: 'aatiqa',
    age: 27,
    gender: 'female'
};

module.exports = obj;

// task1.js
const importedObj = require('./practice.js'); //If practice.js and task1.js are in the same directory:

console.log(importedObj); // Logs the full object

console.log(importedObj.name); // Outputs: 'aatiqa'
console.log(importedObj.age);  // Outputs: 27


//objects
const car = {type:"Fiat", model:"500", color:"white"};     
console.log(car);          // Logs the entire car object: {type: "Fiat", model: "500", color: "white"}
console.log(car.model);    // Logs the value of the "model" property: "500"
//destructing
const fish = { a: 1, b: 2 };
const { a, b } = fish;
console.log(a)         // Logs: 1

// Spread Operator
const person = { name : 'aatiqa' , age :16, isMarried : false};
const person2 = {...person , salary: 700000};
console.log(person2);      // Logs: {name: "aatiqa", age: 16, isMarried: false, salary: 700000}