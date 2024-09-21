import './App.css';
import './button-style.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import logo from './assets/logo.png';

import Australia from './pages/Australia';
import Accommodation from './pages/Accommodation';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
<<<<<<< HEAD
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
=======
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
>>>>>>> b4b1e17a94b1d3e3b8e65d17655696317a62f243

  const handleButtonClick = (destination) => {
    if (!isAuthenticated) {
      loginWithRedirect(); // Redirect to the login page if the user is not logged in
    } else {
      navigate(destination); // Navigate to the desired page if the user is authenticated
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            {isAuthenticated ? (
              <li> 
                <LogoutButton /> 
              </li>) : (
              <li>
<<<<<<< HEAD
                <LogoutButton />
              </li>
            ) : (
              <li>
                <LoginButton />
              </li>
            )}
=======
                <LoginButton /> 
              </li>)}
>>>>>>> b4b1e17a94b1d3e3b8e65d17655696317a62f243
          </ul>
        </nav>
        <div className="App-banner">
          <div className="App-banner-text">
            <h1>Welcome to <span className="highlight">CultureConnect</span></h1>
            <p>Empowering international students with a home away from home</p>
<<<<<<< HEAD
            <div className="button-group">
              <button
                className="App-button primary-button"
                onClick={() => handleButtonClick('/offer-place')} // Redirect to the 'I have a place' page
              >
                I have a place
              </button>
              <button
                className="App-button secondary-button"
                onClick={() => handleButtonClick('/need-place')} // Redirect to the 'I need a place' page
              >
                I need a place
              </button>
            </div>
=======
              <button className="App-button">Join Now</button>
>>>>>>> b4b1e17a94b1d3e3b8e65d17655696317a62f243
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/accommodation" element={<Accommodation />} />
      </Routes>

      <footer className="App-footer">
        <p>© 2024 CultureConnect | SEASA</p>
        <img src={logo} alt="CultureConnect Logo" className="App-logo" /> 
      </footer>
    </div>
  );
}

export default App;
