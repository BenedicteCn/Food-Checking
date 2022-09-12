import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./components.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`
      )
      .then((response) => {
        console.log("response.data", response.data.products);
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <div classname="app">
      <h2>Recherche un produit dans notre base de données :</h2>
      <div className="search-bar">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Rechercher un produit"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button className="search-button" type="submit">
            Chercher
          </button>
        </form>
      </div>

      <h3>Résultats de la recherche</h3>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
