import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { Link } from "react-router-dom";
import "./navbar.css";

const Naavbar = () => {
  return (
    <>
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "#6a48115a", fontWeight: "bold", fontSize: "30px" }}
          >
            Logo
          </a>
          <div className="d-flex navItem">
            <Link
              to="/"
              className="nav-link active home"
              style={{ background: "#DCD9D4", color: "white" }}
            >
              Home
            </Link>
            <Link to="/About" className="nav-link">
              About
            </Link>
            <Link to="/Plans" className="nav-link">
              Plans
            </Link>
            <Link to="/Features" className="nav-link">
              Features
            </Link>
          </div>
          <form className="d-flex ">
            <div className="dropdown ">
              <button
                className="btn btn-secondary dropdown-toggle mx-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                Login
              </button>
              <ul className="dropdown-menu dropdown-menu-#6a48115a ">
                <li > 
                <Link to="/UserLogin" >
                  <button className="btn w-100" type="button">
                    User Login
                  </button>
                </Link>
                </li>
                <li>
                  <Link to="/AdminLogin">
                        <button className="btn mt-2 w-100" type="button">
                          Admin Login
                        </button>
                  </Link>
                </li>
                
              </ul>
            </div>

            

            <Link to="/Registration">
              <button className="btn" type="button">
                Registration
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Naavbar;
