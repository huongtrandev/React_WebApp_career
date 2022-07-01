import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const nameCard = (
  <div className="container">
    <div className="card">
      <div className="card--header">
        <img
          className="avatar"
          src="https://a.cdn-hotels.com/gdcs/production144/d1394/a304783d-6dc9-4bb2-9239-d124a16a154e.jpg"
          alt="avatar"
        ></img>
      </div>
      <div className="card--body">
        <div>
          <p className="text-header">Tran Huong</p>
          <p className="text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);

root.render(nameCard);
