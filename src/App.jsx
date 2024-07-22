import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_category } from './store/reducers/homeReducer';
import CategoryShop from './pages/CategoryShop';
import SearchProduct from './pages/SearchProduct';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/products?" element={<CategoryShop />} />
        <Route path="/products/search?" element={<SearchProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
