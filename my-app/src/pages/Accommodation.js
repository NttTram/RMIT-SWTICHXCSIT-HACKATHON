import React, { useEffect, useState } from "react";

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/accommodations")
      .then((response) => response.json())
      .then((data) => setAccommodations(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleConnectClick = (student) => {
    alert(`You have requested, ${student}.`);
  };

  return (
    <div className="accommodation-page">
      <section className="App-section">
        <h2 className="accommodation-heading">Find Your Perfect Stay</h2>
        <p className="accommodation-intro">
          Explore the available accommodation options, connect with hosts, and
          start your new journey today!
        </p>
        <div className="accommodation-list">
          {accommodations.map((accommodation) => (
            <div className="accommodation-card" key={accommodation.id}>
              <img
                src={`http://localhost:3030${accommodation.image}`} // Use the correct image path
                alt={accommodation.name}
                className="accommodation-image"
              />
              <div className="accommodation-details">
                <h3>Host: {accommodation.student}</h3>
                <p className="accommodation-background">
                  Background: {accommodation.background}
                </p>
                <p className="accommodation-background">
                  Description: {accommodation.Description}
                </p>
                <p className="accommodation-address">
                  Address: {accommodation.address}
                </p>
                <p className="accommodation-type">
                  Type: {accommodation.type}
                </p>
                <p className="accommodation-price">
                  ${accommodation.price_week}/week
                </p>
                <button
                  className="App-button connect-button"
                  onClick={() => handleConnectClick(accommodation.student)}
                >
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
