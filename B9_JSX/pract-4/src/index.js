import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const clock = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};

setInterval(clock, 1000); // khai báo component jsx clock rồi nhưng chưa gọi, phải có
//setinterval() để gọi
// root.render(clock);
