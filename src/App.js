import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ProductDetail from './Component/ProductDetail';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
