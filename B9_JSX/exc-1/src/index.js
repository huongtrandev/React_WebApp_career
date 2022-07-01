import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const navi = (
  <div>
    <h1>Navigator of the browser</h1>
    <h4>Browser's details: {navigator.userAgent}</h4>
  </div>
);

root.render(navi);
