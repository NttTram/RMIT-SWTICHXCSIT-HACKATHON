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
    <>
      <div>
        <section className="App-section">
          <h2>Welcome to the Accommodation Page</h2>
          <p>Find your ideal accommodation here, and even your future friend!</p>
          <br />

          {accommodations.map((accommodation) => (
            <div className="container" key={accommodation.id}>
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="accommodation-image"
              />

              <div className="text-section">
                <button
                  className="App-button"
                  onClick={() => handleConnectClick(accommodation.student)}
                >
                  Connect
                </button>

                <h3>Host: {accommodation.student} ({accommodation.background})</h3>
                <p>Address: {accommodation.address}</p>
                <p>Type: {accommodation.type}</p>
                <p>${accommodation.price_week}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Accommodation;
