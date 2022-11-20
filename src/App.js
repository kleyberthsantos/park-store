import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="body">
      <header> <NavBar/> </header>
      <main className="itemlist"> <ItemListContainer saludo="ItemListContainer" /> </main>
    </div>

  );
}

export default App;
