import logo from './logo.svg';
import './App.css';
import Botao from './Botao';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Botao></Botao>
          <p>Meu primeiro projeto</p>
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
      <div>asdf</div>
    </>
  )
}

export default App;
