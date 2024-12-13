import React, { useState } from "react";
import "./UserPage.css";
import Plans from "./Plans";
import FoodCatagory from "./FoodCatagory";
import Tokens from "./Tokens";
import SendOTP from "../Test/SendOtp";
import MessMenu from "./MessMenu";
import ComplaintForm from "./ComplaintForm";

function UserPage() {
  const [activeSection, setActiveSection] = useState("Profile");

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div>
            {/* Main Content */}
            <main className="col-md-9 col-lg-10 ">
              {/* Stats Section */}
              <div className="row mb-3">
                <div className="col-md-8">
                  <div
                    className="card mb-3"
                    style={{
                      background: "linear-gradient(135deg, #56ab2f, #a8e063)", // Gradient colors
                      borderRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      color: "white",
                      padding: "20px",
                    }}
                  >
                    <div className="">
                      <h5
                        className="card-title"
                        style={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        My Active Plan
                      </h5>

                      <div style={{ textAlign: "center", margin: "10px 0" }}>
                        <h6
                          style={{
                            display: "inline-block",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            padding: "5px 10px",
                            borderRadius: "10px",
                          }}
                        >
                          Premium
                        </h6>
                      </div>

                      <h2
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "2.5rem",
                        }}
                      >
                        One Month - 3300 /-
                      </h2>

                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 0",
                          fontSize: "1.1rem",
                        }}
                      >
                        Breakfast, Lunch, Dinner
                      </p>

                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "25px",
                          color: "#ffcccc",
                          fontWeight: "bold",
                        }}
                      >
                        Remaining 22 days left..
                      </p>

                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "1rem",
                          color: "#fdfd96",
                          fontWeight: "bold",
                        }}
                      >
                        [ Next token Active for : Dinner ]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-primary mb-3 p-3">
                  
                      <h5 className="card-title">Absentee Mark</h5>
                      <p className="card-text">No Absentee till now !</p>
                    
                  </div>
                  <div className="card text-white bg-warning mb-3 p-3">
                    
                      <h5 className="card-title">Complains Pending</h5>
                      <p className="card-text">2</p>
                    
                  </div>
                  <div className="card text-white bg-danger mb-3 p-3">
                    
                      <h5 className="card-title">Activity not complete</h5>
                      <p className="card-text">2</p>
                   
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>

              {/* Table Section */}
              <h2>Recent Activity</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Activity Name</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Plan Purchase</td>
                     
                      <td className="text-success">Successful</td>
                      <td>
                        <button className="btn btn-sm btn-danger mx-3">
                          Remove
                        </button>
                        <button className="btn btn-sm btn-primary">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td >Complaints </td>
                     
                      <td className="text-warning">Under Process</td>
                      <td>
                        <button className="btn btn-sm btn-danger mx-3">
                          Remove
                        </button>
                        <button className="btn btn-sm btn-primary">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Absentee Mark </td>
                     
                      <td className="text-danger">Not Send </td>
                      <td>
                        <button className="btn btn-sm btn-danger mx-3">
                          Remove
                        </button>
                        <button className="btn btn-sm btn-primary">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        );
      case "My Tokens":
        return (
          <div>
            <h4>Todays Token</h4>
            <Tokens />
          </div>
        );
      case "Purchase Plan":
        return (
          <div>
            {" "}
            <Plans />
          </div>
        );
      case "Mees Menu":
        return (
          <div>
            <FoodCatagory />
            <MessMenu/>
          </div>
        );
      case "FeedBack":
        return (
          <div>
            <ComplaintForm/>
            {/* <SendOTP /> */}
          </div>
        );
      case "Settings":
        return (
          <div>
            <h2>Settings</h2>
            <p>Manage your settings here.</p>
          </div>
        );

      default:
        return (
          <div>
            <h2>Welcome</h2>
            <p>Select an option from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-black ">
          <div className="position-sticky">
            <h5 className="sidebar-heading d-flex justify-content-center py-3 text-white">
              User Dashboard
            </h5>
            <ul className="nav flex-column">
              {[
                "Profile",
                "My Tokens",
                "Purchase Plan",
                "Mees Menu",
                "FeedBack",
                "Settings",
              ].map((item) => (
                <li className="nav-item" key={item}>
                  <button
                    className={`nav-link btn ${
                      activeSection === item ? "active" : ""
                    }`}
                    onClick={() => setActiveSection(item)}
                    style={{
                      border: "none",
                      background: "none",
                      textAlign: "left",
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Welcome, Sohel Aktar</h1>
          </div>
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default UserPage;
