import React from "react";
import logo from "../images/react-logo.png";
import navbarStyles from "../styles/navbarStyles.module.css";

function Navbar(props) {
  return (
    <header className={props.darkMode ? `${navbarStyles.header}` : `${navbarStyles.light} ${navbarStyles.header}`}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.logo}>
          <img className={navbarStyles.logoImg} src={logo} alt="logo" />
          <h2 className={navbarStyles.logoText}>ReactFacts</h2>
        </div>
        <div className={navbarStyles.toggler}>
          <p className={navbarStyles.toggler__light}>Light</p>
          <div className={navbarStyles.toggler__slider} onClick={props.toggleDarkMode}>
            <div className={navbarStyles.toggler__slider_circle}></div>
          </div>
          <p className={navbarStyles.toggler__dark}>Dark</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar;