import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Panier from "./components/Panier";

function App() {

  const [panier, setPanier] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetails />} panier={panier} setPanier={setPanier}/>
          <Route path="/panier" render={<Panier />} panier={panier} setPanier={setPanier} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
