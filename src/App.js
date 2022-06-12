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
import Login from './Component/Buttons/Login';
import Signup from './Component/Buttons/Signup';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <>
    <AuthProvider>
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
      <Route path="sign-up" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
