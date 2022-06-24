import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

const names = [
  "Batman",
  "Iron man",
  "Code Gym",
  "Spider man",
  "Black window",
  " Black Adam",
];
function App() {
  const hellos = names.map((name, index) => <Hello name={name} />);
  return <div className="App">{hellos}</div>;
}

export default App;
