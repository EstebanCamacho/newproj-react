import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import {exportData} from './services/helpers';

function App() {
return (
  <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <button onClick={exportData}>Export data</button>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/order-confirmation/:orderid" element={<OrderConfirm />} />
        <Route path="*" element={<h4>Error 404 : Page not found</h4>} />
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
)
}

export default App



