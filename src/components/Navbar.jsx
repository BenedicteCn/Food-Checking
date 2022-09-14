import React from "react";
import Logo from "../assets/logo-food-checking.png";
import { Link } from "react-router-dom";
import "./components.css";
import Menu from "../assets/menu.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navarbar-logo" src={Logo} alt="" />
      </Link>
      <img className="navbar-menu" src={Menu} alt=""/>

    </div>
  );
}

export default Navbar;
