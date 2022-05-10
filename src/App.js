import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps } from './components/PureCompo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PureCompo />
        <PureCompoProps label={"me"} age={2022}/>
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
