import React from 'react';

const ProductList = ({ products }) => {
  //membersihkan URL gambar
  const cleanImageUrl = (imageUrl) => {
    if (typeof imageUrl === 'string') {
      return imageUrl.replace(/[\[\]"\\]/g, '');
    }
    return imageUrl;
  };

  const productsWithImages = products.filter(product => 
    product.images && 
    product.images.length > 0
  );

  return (
    <div className="product-list">
      {productsWithImages.length > 0 ? (
        productsWithImages.map((product) => {
          const imageUrl = cleanImageUrl(product.images[0]);
          return (
            <div className="product-item" key={product.id}>
              <img 
                src={imageUrl} 
                alt={product.title} 
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Category:</strong> {
                typeof product.category === 'object' 
                  ? product.category.name 
                  : product.category
              }</p>
            </div>
          );
        })
      ) : (
        <p>No products with images available.</p>
      )}
    </div>
  );
};

export default ProductList;
