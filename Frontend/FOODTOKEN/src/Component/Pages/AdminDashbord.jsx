import React, { useState } from "react";
import "./AdminDashbord.css";
function AdminDashbord() {
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
      case "User":
        return (
          <div>
            <h2>Create User List </h2>
          </div>
        );
      case "Plan Manage":
        return (
          <div>
           <h2>Plan Manage</h2>
          </div>
        );
      case "Plan Purchase":
        return (
          <div>
         <h2>Plan Purchase</h2>
          </div>
        );
      case "Menu Change":
        return (
          <div>
            <h2> Menu Change</h2>
          
          </div>
        );
      case "Hostel":
        return (
          <div>
            <h2>Hostels</h2>
          </div>
        );
      case "Complaints":
          return (
            <div>
              <h2>Complaints</h2>
              <p>Manage your settings here.</p>
            </div>
          );
      case "Orders":
            return (
              <div>
                <h2>Orders</h2>
                <p>Manage your settings here.</p>
              </div>
            );  
      case "Branch Manage":
              return (
                <div>
                  <h2>Branch</h2>
                  <p>Manage your settings here.</p>
                </div>
              );
      case "Setting":
                return (
                  <div>
                    <h2>Setting</h2>
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
              Admin Dashboard
            </h5>
            <ul className="nav flex-column">
              {[
                "Profile",
                "User",
                "Plan Manage",
                "Plan Purchase",
                "Menu Change",
                "Hostel",
                "Complaints",
                "Orders",
                "Branch Manage",
                "Setting"
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
            <h1 className="h2">Welcome, Admin</h1>
          </div>
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashbord;