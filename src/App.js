import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <section>
        { //OP1 <Componente></Componente>
        }
        {
          //OP2 <Componente msg="Hola soy un componente desde una prop"></Componente>
        }
        {
          //OP3 <Componente msg="Hola soy un componente funcional desde una prop"></Componente>
        }
        <Componente msg="Hola soy un componente funcional expresado desde una prop"></Componente>
      </section>
    </div>
  );
}

export default App;
