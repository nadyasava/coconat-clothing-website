import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import "../styles/HomePage.css";
import About from "../components/About";
import Gallery from "../components/Gallery";
import OurProducts from "../components/OurProducts";
import Loader from "../components/Loader";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
        );
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <About />
      <Gallery />
      {isLoading ? (
        <Loader />
      ) : (
        <OurProducts products={products} />
      )}
    </div>
  );
};

export default HomePage;