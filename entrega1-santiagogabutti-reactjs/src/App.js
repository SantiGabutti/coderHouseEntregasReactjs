import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductListContainer from './components/productListContainer/ProductListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bienvenidos a CoderHouse!!!
        </a> */}
        <NavBar/>
      </header>
      <main>
        <ProductListContainer/>
      </main>
    </div>
  );
}

export default App;
