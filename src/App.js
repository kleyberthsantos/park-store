import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDitailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter className="app">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:nameCategory' element={<ItemListContainer/>} />
        <Route path='/item/:idProduct' element={<ItemDitailContainer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;