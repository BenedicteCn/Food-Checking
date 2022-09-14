import React from "react";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { useState } from "react";


function Home() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <div className="home-component">
      <ProductList products={products} setProducts={setProducts} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <Pagination setPageNumber={setPageNumber} products={products}/>
    </div>
  );
}

export default Home;
