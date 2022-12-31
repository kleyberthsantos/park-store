import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDitailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { Container } from 'react-bootstrap';




function App() {
  return (
 
    <CartContextProvider>
    <BrowserRouter>
      <NavBar /> 
      <div className='appContainer'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:nameCategory' element={<ItemListContainer/>} />
          <Route path='/item/:idProduct' element={<ItemDitailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>      
    </BrowserRouter>
    
    </CartContextProvider>

  );
}

export default App;