import React from "react";

function Services() {
  return (
    <>
      <section className="App-features">
        <h2>Our Services</h2>
        <div className="App-features-grid">
          
          <div className="feature-item">
          <a href="/australia">

            <h3>Australian Culture</h3> </a>
            <p>
              Experience Australian culture firsthand by living with a local
              student. From shared meals to exploring the city together, you’ll
              gain a deeper understanding of your new home.
            </p>
          </div>
         

          <div className="feature-item">
          <a href="/accommodation">

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
