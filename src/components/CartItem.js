import React from "react";

const CartItem = (props) => {
  const {itemName} = props
  return (
    <div className="item">
      <h6>{itemName}</h6>
    </div>
  );
};

export default CartItem;
