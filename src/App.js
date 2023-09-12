import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='Primera-Linea'>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>

  );
}

export default App;
