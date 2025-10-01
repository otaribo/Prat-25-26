import logo from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="caja">
            <img src={logo} className="App-minilogo" alt="logo" />
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <img src={logo} className="App-minilogo" alt="logo" />
          </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello world
        </p>
      </header>
    </div>
  );
}

export default App;
