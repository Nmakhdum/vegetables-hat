import React from "react";
import Product from "./Product";


const Products = (props) => {
  const {products} = props
  const {addToCart} = props


  return (
    <div className="products">
      <h2>All Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {products.map((p) => (
          <Product key={p.id} id={p.id} title={p.title} price={p.price} url={p.url} addToCart={addToCart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
