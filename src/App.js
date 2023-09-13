import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/cards/Cards';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {"bienvenidos"}/>
      <div className='Primera-Linea'>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>

  );
}

export default App;
