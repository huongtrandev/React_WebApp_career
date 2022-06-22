// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value.");
//   } else {
//     reject("There no count value.");
//   }
// });

// console.log(countValue);

// return a promise
let countValue = new Promise(function (resolve, reject) {
  // resolve("Promise resolved");
  reject("Promise rejected");
});

//executes when promise is resolved successfully
countValue
  .then(function successValue(result) {
    console.log(result);
  })

  // .then(function successValue1() {
  //   console.log("you can call multiple function this way.");
  // });

  .catch(function errorValue(result) {
    console.log(result);
  });

// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");
//     // tìm hiểu cái throw - nó ném cái đéo j cũng được sao, kể cả tạo 1 lỗi
//     // để chương trình nhận là có rejection
//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });

// // Các hàm đồng bộ được gọi trước, sau đó mới chạy đến bất đồng  bộ
