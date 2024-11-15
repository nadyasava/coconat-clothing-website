import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
