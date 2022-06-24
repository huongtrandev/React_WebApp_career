// async function example
// async function f() {
//   console.log("Async function.");
//   return Promise.resolve(1);
// }
// // f();

// f().then(function (d) {
//   //then này là then catch
//   console.log(d);
// });

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolve");
  }, 4000);
});

//async function
async function asyncFunc() {
  //wait until the promise resolve
  let result = await promise;
  console.log(result);
  console.log("hello");
}

//calling the async function
asyncFunc();
