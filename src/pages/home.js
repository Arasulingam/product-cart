import React from "react";
import { products } from "../products";
import ProductCart from "../components/productCart";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">List Products</h1>
      <div className="products-grid">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
