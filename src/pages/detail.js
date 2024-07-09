import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import "../css/detail.css";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
    setAdded(true);
  };

  return (
    <div className="detail-container">
      <h2 className="detail-title">PRODUCT DETAIL</h2>
      <div className="detail-grid">
        <div>
          <img src={detail.image} alt="" className="detail-image" />
        </div>
        <div className="detail-info">
          <h1 className="detail-name">{detail.name}</h1>
          <p className="detail-price">₹{detail.price}</p>
          <div className="quantity-control">
            <div className="quantity-buttons">
              <button className="quantity-button" onClick={handleMinusQuantity}>
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-button" onClick={handlePlusQuantity}>
                +
              </button>
            </div>
            <button
              className={`add-to-cart ${added ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? "Added" : "Add To Cart"}
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
