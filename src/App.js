import "./App.css";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main></main>
      <footer className="flex flex-col lg:flex-row gap-5 px-5 lg:px-10 py-5 lg:items-center lg:justify-between bg-slate-50">
        <div className="h-10 w-10">
          <a href="/">
            <img src="logo.svg" alt="Logo"></img>
          </a>
        </div>
        <div>
          <ul className="lg:text-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Max Mustermann</span>
          <span>Mariahilfer Straße 10</span>
          <span>1070 Wien, Österreich</span>
          <span>+43 660 1234567</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
