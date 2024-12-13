import React, { useState } from "react";
import "./ComplaintForm.css";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
    evidence: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Log form data to the console for demonstration purposes
    console.log("Form Data Submitted:", formData);

    // Reset form data
    setFormData({
      name: "",
      email: "",
      complaint: "",
      evidence: null,
    });
  };

  return (
    <div className="complaint-form container">
      <h1 className="text-center mb-4">Complaint Form</h1>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Your complaint has been submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="shadow p-4 feed">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="complaint" className="form-label">
            Complaint Description
          </label>
          <textarea
            className="form-control"
            id="complaint"
            name="complaint"
            rows="4"
            value={formData.complaint}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="evidence" className="form-label">
            Upload Evidence (Optional)
          </label>
          <input
            type="file"
            className="form-control"
            id="evidence"
            name="evidence"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" align="right" className="btn"  style={{fontSize:"1.2rem",fontWeight:"bold",background:"green"}}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
