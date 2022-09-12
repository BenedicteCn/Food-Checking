import React from "react";
import Logo from "../assets/logo-food-checking.png";
import { Link } from "react-router-dom";
import "./components.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={Logo} alt="" width="150px" />
      </Link>
      <p>Menu</p>
    </div>
  );
}

export default Navbar;
