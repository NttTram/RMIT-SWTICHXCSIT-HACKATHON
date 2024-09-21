import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import logo from './assets/logo.png';


function App() {
  return (
    <div className="App">

<Router>

      <header className="App-header">
        <nav className="App-nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="App-banner">
          <div className="App-banner-text">
            <h1>Welcome to <span className="highlight">CultureConnect</span></h1>
            <p>Empowering international students with a home away from home</p>
            <button className="App-button">Join Now</button>
          </div>
        </div>
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
      

      <footer className="App-footer">
        <p>© 2024 CultureConnect | SEASA</p>
        <img src={logo} alt="CultureConnect Logo" className="App-logo" /> 

      </footer>
    </div>
  );
}

export default App;