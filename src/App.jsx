import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
