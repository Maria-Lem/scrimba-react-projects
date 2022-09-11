import logo from './images/react-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
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
      </main>
    </div>
  );
}

export default App;
