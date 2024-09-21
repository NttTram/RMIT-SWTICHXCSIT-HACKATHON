import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Host() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    pricePerWeek: "",
    typeOfHome: "studio", // default value for the dropdown
    background: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] }); // File input for image
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send file and other form data
    const newFormData = new FormData();
    newFormData.append("student", formData.name);
    newFormData.append("address", formData.address);
    newFormData.append("price_week", formData.pricePerWeek);
    newFormData.append("type", formData.typeOfHome);
    newFormData.append("background", formData.background);
    newFormData.append("image", formData.image); // Append the image file
    newFormData.append("description", formData.description);

    try {
      const response = await fetch("http://localhost:3030/api/accommodations", {
        method: "POST",
        body: newFormData, // Send FormData
      });

      if (response.ok) {
        alert("Your accommodation has been listed!");
        navigate("/accommodation");
      } else {
        alert("There was a problem listing your accommodation.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // Render nothing while redirecting
  }

  return (
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
  );
}

export default Host;
