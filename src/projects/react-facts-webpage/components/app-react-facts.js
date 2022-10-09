import React, { useState } from "react";
import Navbar from './navbar';
import Main from './main';

export default function AppReactFacts() {
  const [darkMode, setDarkMode] = useState(true);

  const toggle = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="AppReactFacts">
      <Navbar darkMode={darkMode} toggleDarkMode={toggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}