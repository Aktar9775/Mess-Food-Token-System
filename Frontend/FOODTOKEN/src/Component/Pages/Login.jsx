import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Added Link for navigation
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [capVal, setCapVal] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Email:", email);
    console.log("Password:", password);

    // Perform validation or API call here && captcha
    if (email && password ) {
      // Redirect to UserPage
      navigate("/UserPage");
    } else {
      alert("Please complete all fields and verify CAPTCHA.");
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="container text-center">
          <div className="row login text-center">
            <h3>User Login</h3>
            <div className="mb-3 row mt-5">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="staticEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              {/* <ReCAPTCHA
                sitekey="6LdOgYIqAAAAAMKTwy1Dyzzo4YNln8T2QsHVRubH"
                onChange={(val) => setCapVal(val)}
              /> */}
              <div className="text-center mt-3">
                <button type="submit" className="btn mb-3" >
                {/* disabled={!capVal} */}
                  Login
                </button>
              </div>
            </div>
            <a className="forgot-password-link red-text" href="#">
              <br />
              Forgot Password?
            </a>
            <hr />
            <p>
              No account yet?{" "}
              <Link to="/Registration" className="forgot-password-link blue-text">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
