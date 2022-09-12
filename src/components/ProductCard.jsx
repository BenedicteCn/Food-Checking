import React from "react";
import "./components.css";

function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-card">
      <h4>{product.product_name}</h4>
      <img src={product.image_front_small_url} alt="product" />
      <p>{product.id}</p>
    </div>
  );
}

export default ProductCard;
