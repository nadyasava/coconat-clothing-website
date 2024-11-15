import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from "./components/ScrollToTopButton";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
