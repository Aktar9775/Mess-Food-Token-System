import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AdminLogin() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log('UserName:', userName);
    console.log('Password:', password);

    // Perform validation or API call here
    if (userName && password) {
      // Redirect to AdminDashboard
      navigate('/AdminDashboard'); 
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="container text-center">
          <div className="row login text-center">
            <h3>Admin Login</h3>
            <div className="mb-3 row mt-5">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Username
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <button type="submit" className="btn mb-3">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default AdminLogin;
