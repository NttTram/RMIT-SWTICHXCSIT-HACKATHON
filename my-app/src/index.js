import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-i6xg01jdb8148mwe.au.auth0.com"
    clientId="kDTBqwVq5wt2GuJo5QvgGewx3xrGgHRF"
    // authorizationParams={{
    //   redirect_uri: window.location.origin
    // }}
    redirectUri={window.location.origin}
  >
    {/* Wrap App inside Router */}
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
