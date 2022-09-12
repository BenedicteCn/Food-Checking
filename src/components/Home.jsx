import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="home-component">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default Home;
