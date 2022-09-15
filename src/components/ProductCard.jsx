import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-card">
      <a href={`/${product.id}`}>
        <h4>{product.product_name}</h4>
        <img src={product.image_front_small_url} className="product-card-image" alt={product.product_name}  />
      </a>
    </div>
  );
}

export default ProductCard;
