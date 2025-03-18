import "./App.css";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="p-5 lg:p-10">
        <h1>Lovely Cats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <a className="card" href="/" target="_blank">
            <div className="card-spacing">
              <img src="" alt="placeholder" />
              <div>
                <h2>Cat 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </div>
          </a>
          <div>Grid1</div>
          <div>Grid1</div>
          <div>Grid1</div>
          <div>Grid1</div>
          <div>Grid1</div>
        </div>
      </main>
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
