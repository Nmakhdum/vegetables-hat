import React from "react";

const Product = (props) => {
  const { id, title, price, url, addToCart } = props;
  return (
    <div className="card">
      <img className="card-img-top" src={url} alt="Card image cap" />
      <div className="card-body">
        <h3 className="">{title}</h3>
        <h6 className="">${price}</h6>

        <button className="btn btn-warning" onClick={() => addToCart(id)}>
          Add to cart 🛒
        </button>
      </div>
    </div>
  );
};

export default Product;
