import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import '../styles/ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h1 className="products-page-title">Our Products</h1>
      <div className="products-container">
        {isLoading ? (
          <Loader />
        ) : products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p className="no-products-message">No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
