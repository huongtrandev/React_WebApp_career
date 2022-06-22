// function greet(name, callback) {
//   console.log("hi" + " " + name);
//   callback();
// }
// // callback function la ham goi sau, trong do callback duoc coi la 1 tham so trong ham
// //call back function
// function callMe() {
//   console.log("I am callback function");
// }

// // passing function as an argument
// greet("Peter", callMe);

// function greet() {
//   console.log("hello world");
// }

// function sayName(name) {
//   console.log("hello" + " " + name);
// }

// //calling function
// setTimeout(greet, 2000);
// sayName("John");

// Callback function example
function greet(name, myFunction) {
  console.log("hello world");

  // callback function
  //executed only after the greet() is executed
  myFunction(name);
}
//call back function
function sayName(name) {
  console.log("hello" + " " + name);
}

//calling the function after 2 seconds
setTimeout(greet, 2000, "John", sayName);
