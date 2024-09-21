import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Host() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    pricePerWeek: "",
    typeOfHome: "studio", // default value for the dropdown
    background: "",
    image: null,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (You can submit it to a backend service here)
    console.log("Form data submitted: ", formData);
    alert("Your accommodation has been listed!");
    navigate("/accommodation");
  };

  // If user is not logged in, redirect to login
  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <section className="App-section">
        <h2>Host Your Place for Other Students</h2>
        <p>Fill in the details below to list your accommodation.</p>
        <form onSubmit={handleSubmit} className="host-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pricePerWeek">Price per Week ($)</label>
            <input
              type="number"
              id="pricePerWeek"
              name="pricePerWeek"
              value={formData.pricePerWeek}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="typeOfHome">Type of Home</label>
            <select
              id="typeOfHome"
              name="typeOfHome"
              value={formData.typeOfHome}
              onChange={handleChange}
              required
            >
              <option value="studio">Studio</option>
              <option value="1 bed">1 Bed</option>
              <option value="2 bed">2 Bed</option>
              <option value="3 bed">3 Bed</option>
              <option value="4 bed">4 Bed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="background">Background</label>
            <input
              type="text"
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="App-button submit-button">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Host;
