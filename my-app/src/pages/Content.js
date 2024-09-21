import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../content.css"; // Import your CSS file for styling

function Content() {
  const [accommodation, setAccommodation] = useState(null); // Holds accommodation data
  const { id } = useParams(); // Get the ID from the URL

  // Fetch accommodation details when component loads
  useEffect(() => {
    fetch(`/accommodation/${id}`)
      .then(response => response.json())
      .then(data => setAccommodation(data))
      .catch(error => console.error("Error fetching accommodation:", error));
  }, [id]);

  // Loading state
  if (!accommodation) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content-container">
      <section className="content-section">
        {/* Background Image */}
        <div
          className="content-background"
          style={{ backgroundImage: `url(${accommodation.background})` }}
        ></div>

        {/* Content Details */}
        <div className="content-details">
          {/* Accommodation Title (Student Name) */}
          <h1 className="content-title">{accommodation.student}</h1>

          {/* Images */}
          <div className="content-images">
            <img src={accommodation.image} alt="Accommodation" />
          </div>

          {/* Address */}
          <p className="content-address">
            <strong>Address:</strong> {accommodation.address}
          </p>

          {/* Housing Type */}
          <p className="content-type">
            <strong>Housing Type:</strong> {accommodation.type}
          </p>

          {/* Price per week */}
          <p className="content-price">
            <strong>Price per Week:</strong> ${accommodation.price_week}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Content;
