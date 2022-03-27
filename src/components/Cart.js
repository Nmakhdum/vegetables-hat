import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, chooseItem, clear } = props;

  return (
    <section className="my-4 container">
      <h2>Cart</h2>
      <div className="cart-items">
          {cartItems.map(item=>(
              <CartItem key={item.id} itemName={item.title}></CartItem>

          ))}
      </div>
      <button className="btn btn-danger m-2" onClick={chooseItem}>Choose One</button>
      <button className="btn btn-primary" onClick={clear}>Clear</button>
    </section>
  );
};
export default Cart;
