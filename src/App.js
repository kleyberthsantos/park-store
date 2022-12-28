import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDitailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';




function App() {
  return (
    <CartContextProvider>
    <BrowserRouter className="app">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:nameCategory' element={<ItemListContainer/>} />
        <Route path='/item/:idProduct' element={<ItemDitailContainer />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;