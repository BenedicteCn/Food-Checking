import React from "react";
import Logo from "../assets/logo-food-checking.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Menu from "../assets/menu.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navarbar-logo" src={Logo} alt="" />
      </Link>
      <img className="navbar-menu" src={Menu} alt=""/>
      <Link to="/panier">
        <button>Panier</button>
      </Link>

    </div>
  );
}

export default Navbar;
