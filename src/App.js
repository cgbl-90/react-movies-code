import logo from "./logo.svg";
import carmen from "./carmen.svg";
import SearchAddDelete from "./SearchAddDelete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={carmen} className="logo" alt="carmen" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="react-logo logo" alt="logo" />
        </a>
      </header>
      <SearchAddDelete />
      <footer>
        <p>Coded by Carmen López @ 2022</p>
      </footer>
    </div>
  );
}

export default App;
