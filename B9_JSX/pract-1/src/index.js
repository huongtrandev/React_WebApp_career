import React from "react";
import ReactDOM from "react-dom/client";

// const name = "Your name";
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry",
];

const element = (
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map(
        (
          item // sử dụng phương thức map.array call hàm với
        ) => (
          // tham số là item, kết quả trả về là đối tượng html li:list với từng item trong mảng
          <li>{item}</li>
        )
      )}
    </ul>
  </div>
);
// React.createElement("h1", { style: { textAlign: "center" } }, name);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);
// name in {} is javascript element
root.render(element);
