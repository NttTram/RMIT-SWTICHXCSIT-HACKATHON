import React, { useEffect, useState } from 'react';

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/accommodations')
      .then(response => response.json())
      .then(data => setAccommodations(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>
        <section className="App-section">
          <h2>Welcome to Accommodation Page</h2>
          <p>This is the Accommodation page content.</p>
          <ul>
            {accommodations.map(accommodation => (
              <li key={accommodation.id}>
                <h3>{accommodation.name}</h3>
                <p>{accommodation.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Accommodation;