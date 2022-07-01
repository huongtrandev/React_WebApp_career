import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const students = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Fancisco Chang",
    country: "Mexico",
  },
  {
    company: "Ernst Handel",
    contact: "Roland Bennett",
    country: "Austria",
  },
  {
    company: "Island Trading",
    contact: "Henlen Bennett",
    country: "UK",
  },
  {
    company: "Lauphing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  {
    company: "Magazzini Alimentari Riuniti",
    contact: "Giovani Rovelli",
    country: "Italy",
  },
];

const table = (
  <div>
    <table>
      <caption>Students</caption>
      {students.map((students) => (
        <tr>
          <td>{students.company}</td>
          <td>{students.contact}</td>
          <td>{students.country}</td>
        </tr>
      ))}
    </table>
  </div>
);

root.render(table);
