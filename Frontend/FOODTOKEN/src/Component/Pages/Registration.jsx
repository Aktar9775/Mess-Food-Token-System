import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const [hasRegistered, setHasRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    roll: "",
    dept: "",
    hostel: "",
    room: "",
    email: "",
    phone: "",
    password: "",
    Cpassword: "",
    session: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);

    // Check if passwords match
    if (formData.password !== formData.Cpassword) {
      alert("Passwords do not match!");
      return;
    }

    setHasRegistered(true);
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      roll: "",
      dept: "",
      hostel: "",
      room: "",
      email: "",
      phone: "",
      password: "",
      Cpassword: "",
      session: "",
      gender: "",
    });
  };

  return (
    <div>
      <button className="btn">Back</button>
      {hasRegistered ? (
        <div className="opt">
          <h4>Verify OTP sent to your registered email:</h4>
          <br />
          <input type="text" className="OPT" placeholder="Enter OTP" />
          <button className="btn ms-3">Verify</button>
        </div>
      ) : (
        <div className="container formReg">
          <h2 className="text-center mb-4 text-white">User Registration Form</h2>
          <div className="row">
            <div className="col">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3 row">
                  <label htmlFor="firstName" className="form-label">
                    Name
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <label className="form-label">Gender :</label>
                <div className="d-flex mb-3">
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Others"
                      checked={formData.gender === "Others"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Others</label>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="roll" className="form-label">
                      Roll
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="roll"
                      name="roll"
                      value={formData.roll}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="dept" className="form-label">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dept"
                      name="dept"
                      value={formData.dept}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="hostel" className="form-label">
                      Hostel Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="hostel"
                      name="hostel"
                      value={formData.hostel}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="room" className="form-label">
                      Room No.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="room"
                      name="room"
                      value={formData.room}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="mb-3 col">
                    <label htmlFor="password" className="form-label">
                      Enter Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 col">
                    <label htmlFor="Cpassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Cpassword"
                      name="Cpassword"
                      value={formData.Cpassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="session" className="form-label">
                    Session (Ex: 2024-26)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="session"
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-end">
                  <button type="button" className="btn btn-secondary" onClick={handleClear}>
                    Clear
                  </button>
                  <button type="submit" className="btn btn-success ms-3">
                    Submit
                  </button>
                </div>
                <hr />
                <p>
                  Already have an account?{" "}
                  <Link to="/UserLogin" className="forgot-password-link">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
