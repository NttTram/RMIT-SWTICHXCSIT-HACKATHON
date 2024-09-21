import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

function Services() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Handler for navigation
  const handleLinkClick = (e, destination) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (!isAuthenticated) {
      // Redirect to Auth0 login page if not authenticated
      loginWithRedirect();
    } else {
      // Navigate to the destination page if authenticated
      navigate(destination);
    }
  };

  return (
    <>
      <section className="App-features">
        <h2>Our Services</h2>
        <div className="App-features-grid">
          
          {/* Australian Culture Feature */}
          <div className="feature-item">
            <a href="/australia">
              <h3>Australian Culture</h3>
            </a>
            <p>
              Experience Australian culture firsthand by living with a local
              student. From shared meals to exploring the city together, you’ll
              gain a deeper understanding of your new home.
            </p>
          </div>
          
          {/* Accommodation Feature with authentication check */}
          <div className="feature-item">
            <a href="/accommodation" onClick={(e) => handleLinkClick(e, '/accommodation')}>
              <h3>Accommodation</h3>
            </a>
            <p>
              Find trusted and verified accommodations with host students,
              ensuring a secure living environment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
