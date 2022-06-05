// let greeting = "lazy dog humps over brown fox";
// let chars = [...greeting];
// console.log(chars.length);

let blog1Subscribers = ["billy@example.com", "sallyw@gmail.com"];
let blog2Subscribers = [
  "timmy@gmail.com",
  "tammy@example.com",
  "tommy@gmail.com",
];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);

var str = "hello";
var chars = [...str];

console.log(chars);

const billing = {
  billingContact: "0987654321",
  billingAddress: "Street no 123, xyz city",
};
const shipping = {
  shippingContact: "123456789",
  shippingAddress: "street no 999, abc city",
};
const custInfo = { ...billing, ...shipping };
console.log(custInfo);

let students = ["John", "Sofia", "Bob"];
let copy_students = [...students];
console.log(copy_students);
students.push("Sally"); // change students
console.log(copy_students); // dung spread attribute thì sẽ copy an array được
// có nghĩa là array được copy sẽ tách riêng và không bị ảnh hưởng nếu ta thay đổi
// array ban đầu
