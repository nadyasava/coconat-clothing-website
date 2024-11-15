import React, { useEffect, useRef, useState } from 'react';
import '../styles/OurProducts.css';
import Loader from './Loader';

const cleanImageUrl = (imageUrl) => {
  if (typeof imageUrl === 'string') {
    return imageUrl.replace(/[\[\]"\\]/g, '');
  }
  return imageUrl;
};

const OurProducts = ({ products }) => {
  const [duplicateCount] = useState(3);
  const scrollRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (!scrollRef.current || products.length === 0) return;

    const scroll = () => {
      if (scrollRef.current && !isResetting) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const halfScroll = maxScroll / 2;

        if (container.scrollLeft >= halfScroll) {
          setIsResetting(true);
          container.scrollLeft = 0;
          setTimeout(() => setIsResetting(false), 100);
        } else {
          container.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [products, isResetting]);

  const duplicatedProducts = Array(duplicateCount)
    .fill([...products])
    .flat();

  return (
    <section className="carousel-section">
      <h2 className="our-product-title">Our Products</h2>
      <div className="carousel-container" ref={scrollRef}>
        {products.length > 0 ? (
          <div className="carousel">
            {duplicatedProducts.map((product, index) => {
              const rawImageUrl = product.images && product.images[0];
              const imageUrl = cleanImageUrl(rawImageUrl);
              return (
                <div key={`${product.id}-${index}`} className="carousel-item">
                  {imageUrl ? (
                    <img src={imageUrl} alt={product.title} className="carousel-image" />
                  ) : (
                    <div className="no-image">No Image Available</div>
                  )}
                  <h3 className="carousel-item-title">{product.title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default OurProducts;
