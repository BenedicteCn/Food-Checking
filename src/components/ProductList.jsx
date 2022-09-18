import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import FoodScan from "../assets/barcode-scan.png";
import Loupe from "../assets/magnifying-glass.png";


function ProductList({products, setProducts, pageNumber, setPageNumber}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const productsPerPage = 8
  const pagesVisited = pageNumber * productsPerPage

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=$1&page_size=32`
      )
      .then((response) => {
        setProducts(response.data.products);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };


  return (
    <div className="product-list-component">
      <h2>Le moteur de recherche de vos produits alimentaires préférés</h2>
      <h4>Nous décryptons et analysons des milliers de produits pour vous renseigner sur leur composition</h4>
      <img className="FoodScan" src={FoodScan} alt="" width="200px"/>
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
            <img src={Loupe} className="product-list-loupe" alt="submit" />
          </button>
        </form>
      </div>

      <h3>Résultats de la recherche :</h3>

      <div className="product-list">
        {products
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
