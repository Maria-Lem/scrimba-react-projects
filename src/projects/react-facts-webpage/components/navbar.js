import React from "react";
import logo from "../images/react-logo.png";
import navbarStyles from "../styles/navbarStyles.module.css";

function Navbar() {
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.logo}>
          <img className={navbarStyles.logoImg} src={logo} alt="logo" />
          <h2 className={navbarStyles.logoText}>ReactFacts</h2>
        </div>
        <h3 className={navbarStyles.title}>React Course - Project 1</h3>
      </div>
    </header>
  )
}

export default Navbar;