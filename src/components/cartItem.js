import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
import "../css/cartItem.css";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="cart-item">
      <img src={detail.image} alt="" className="cart-item-image" />
      <h3 className="cart-item-name">{detail.name}</h3>
      <p className="cart-item-price">₹{detail.price * quantity}</p>
      <div className="cart-item-quantity-control">
        <button className="quantity-button" onClick={handleMinusQuantity}>
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-button" onClick={handlePlusQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
