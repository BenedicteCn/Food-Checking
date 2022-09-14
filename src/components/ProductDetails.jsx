import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; 
import Home from "../assets/return.png"


function ProductDetails() {
  const params = useParams();
  console.log(params.id);

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

  return (
    <div className="product-details">
      <h3>{oneProduct.product_name}</h3>
      <img
        src={oneProduct.image_front_url}
        alt={oneProduct.product_name}
      />
      <p><h4>Catégories :</h4> {oneProduct.categories}</p>
      <p><h4>Allergènes :</h4> {oneProduct.allergens_hierarchy}</p>
      <p><h4>Ingrédients : </h4>
        <ul>
        {oneProduct.ingredients_text}
        </ul>
      </p>
      <div className="product-details-back-home">
      <Link to={`/`}>
        <img src={Home} className="product-destails-home" alt="" width='20px' />
        Retour à l'accueil
      </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
