import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import "../css/ProductCart.css";

const ProductCart = (props) => {
  const [added, setAdded] = useState(false);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
    setAdded(true);
  };

  return (
    <div className="product-cart">
      <Link to={slug}>
        <img src={image} alt="" className="product-image" />
      </Link>
      <h3 className="product-name">{name}</h3>
      <div className="product-details">
        <p>
          ₹<span className="product-price">{price}</span>
        </p>
        <button
          className={`add-to-cart-button ${added ? "added" : "not-added"}`}
          onClick={handleAddToCart}
          disabled={added}
        >
          <img src={iconCart} alt="" className="cart-icon" />
          {added ? "Added to Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
