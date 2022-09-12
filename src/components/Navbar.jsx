import React from "react";
import Logo from "../assets/logo-food-checking.png";
import "./components.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" width="150px" />
      <p>Menu</p>
    </div>
  );
}

export default Navbar;
