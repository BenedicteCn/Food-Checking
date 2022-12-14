import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div key={product._id} className="product-card">
      <Link to={`/${product.id}`}>
        <h4>{product.product_name}</h4>
        <img src={product.image_front_small_url} className="product-card-image" alt={product.product_name}  />
      </Link>
    </div>
  );
}

export default ProductCard;
