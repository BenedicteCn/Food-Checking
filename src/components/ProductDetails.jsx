import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios"; 
import Home from "../assets/return.png"
import './ProductDetails.css'

function ProductDetails( {panier, setPanier}) {
  const params = useParams();
  const [oneProduct, setOneProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.replace('/', '');
    axios
      .get(
        `https://world.openfoodfacts.org/api/v0/product/${id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`
      )
      .then((response) => {
        setOneProduct(response.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  function add (oneProduct) {
    setPanier(oneProduct)

  }

  const categories = oneProduct.categories;
  const allergens = oneProduct.allergens_hierarchy;

  return (
    <div className="product-details-component">
      <div className="product-details-card">
        <h3 id="product-name">{oneProduct.product_name}</h3>
        <img
          src={oneProduct.image_front_url}
          alt={oneProduct.product_name}
          className="product-details-image"
        />
        <p>Catégories : {categories}</p>

        {allergens && allergens.length !== 0 ? <p>Allergènes : {allergens.join(', ')}</p> : ''}

        <p>Ingrédients : {oneProduct.ingredients_text}</p>
        <div className="product-details-back-home">
        <Link to={`/`}>
          <img src={Home} className="product-details-home" alt="" />
          Retour à l'accueil
        </Link>
        </div>

        <button onClick={ () => add(oneProduct)}>
          Ajouter au panier
          </button>
      </div>
    </div>
  );
}

export default ProductDetails;
