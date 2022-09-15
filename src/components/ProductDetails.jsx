import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; 
import Home from "../assets/return.png"


function ProductDetails() {
  const params = useParams();
  const [oneProduct, setOneProduct] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/api/v0/product/${params.id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`
      )
      .then((response) => {
        console.log("response.data", response.data.product);
        setOneProduct(response.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  const categories = oneProduct.categories
  console.log('catégories', categories)
  const allergens = oneProduct.allergens_hierarchy
  console.log('allergens', allergens)


  return (
    <div className="product-details-component">
      <div className="product-details-card">
        <h3>{oneProduct.product_name}</h3>
        <img
          src={oneProduct.image_front_url}
          alt={oneProduct.product_name}
          className="product-details-image"
        />
        <p>Catégories : {categories}</p>

        {(() => {if (allergens && allergens.length !== 0) {return <p>Allergènes : {allergens}</p>}})()}

        <p>Ingrédients : {oneProduct.ingredients_text}</p>
        <div className="product-details-back-home">
        <Link to={`/`}>
          <img src={Home} className="product-details-home" alt="" />
          Retour à l'accueil
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
