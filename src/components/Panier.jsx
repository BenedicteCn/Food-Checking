import React from "react";

function Panier( {panier, setPanier}) {
  return (
    <div className="panier">

        {panier.product_name}

    </div>
  );
}

export default Panier;
