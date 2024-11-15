import React from "react";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  const cleanImageUrl = (imageUrl) => {
    if (typeof imageUrl === "string") {
      return imageUrl.replace(/[\[\]"\\]/g, "");
    }
    return imageUrl;
  };

  const productsWithImages = products.filter(
    (product) => product.images && product.images.length > 0
  );

  return (
    <div className="main">
      <ul className="cards">
        {productsWithImages.length > 0 ? (
          productsWithImages.map((product) => {
            const imageUrl = cleanImageUrl(product.images[0]);
            return (
              <li className="cards_item" key={product.id}>
                <div className="card" data-aos='fade-up'>
                  <div className="card_image">
                    <img src={imageUrl} alt={product.title} />
                    <span className="card_price">
                      <span>${product.price}</span>
                    </span>
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{product.title}</h2>
                    <div className="card_text">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p>No products with images available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
