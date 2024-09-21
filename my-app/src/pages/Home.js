import React from 'react';

function Home() {
  return(
    <div>
    <h2>Home Page</h2>

    <section className="App-section">
    <h2>Our Mission</h2>
    <p>
        At CultureConnect, we bridge the gap between international and domestic students by offering a unique home-stay experience. 
        Through cultural immersion and shared experiences, we help international students adjust to life in Australia while building lasting relationships.
    </p>
    <img src="https://via.placeholder.com/600" alt="International Students" className="App-image" />
    </section>

    <section className="App-features">
    <h2>Why Choose Us?</h2>
    <div className="App-features-grid">
        <div className="feature-item">
        <h3>Cultural Immersion</h3>
        <p>Live and learn with domestic students to gain a deep understanding of Australian culture.</p>
        </div>
        <div className="feature-item">
        <h3>Safe Accommodation</h3>
        <p>Find trusted and verified accommodations with host students, ensuring a secure living environment.</p>
        </div>
        <div className="feature-item">
        <h3>Seamless Transition</h3>
        <p>We help ease the transition to a new country with support, guidance, and community.</p>
        </div>
    </div>
    </section>

    </div>
  );
}

export default Home;