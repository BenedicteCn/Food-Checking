import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./components.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=nutella&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`
      )
      .then((response) => {
        console.log("response.data", response.data.products);
        setProducts(response.data.products);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
