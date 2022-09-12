import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <header className="header">
        <img className="logo" src={logo} alt="logo" width="46px" />
      </header>
      <main className="main">
        <h1 className="title">Fun facts about React</h1>
        <ul>
          <li className="item">Was first released in 2013</li>
          <li className="item">Was originally created by Jordan Walke</li>
          <li className="item">Has well over 100K stars on GitHub</li>
          <li className="item">Is maintained by Facebook</li>
          <li className="item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main> */}
    </div>
  );
}

export default App;
