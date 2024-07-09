import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { toggleStatusTab } from "../stores/cart";
import "../css/cartTab.css";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`cart-tab-container ${statusTab === false ? "hidden" : ""}`}
    >
      <h2 className="cart-tab-title">Shopping Cart</h2>
      <div className="cart-items-container">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="cart-tab-actions">
        <button className="close-button" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
