import './App.css'
import Header from './components/Header'
import Home from './pages/Home'; // Import Home page component
import AllProducts from './pages/AllProducts'; // Import Products page component
import About from './pages/About'; // Import About page component
import Contact from './pages/Contact'; // Import Contact page component
import Login from './pages/Login'; // Import Login page component
import Register from './pages/Register'; // Import Register page component
import ProductListing from './pages/ProductListing.jsx';
import ProductDetails from './pages/ProductDetails.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Footer from './components/Footer.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/product_listing' element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
