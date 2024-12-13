import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tokens.css"; // Custom CSS for additional styles

const Tokens = () => {
  const [selectedToken, setSelectedToken] = useState(null);

  const tokens = [
    {
      id: 1,
      title: "Breakfast",
      validity: "valid until 04.07.2023",
      description: "Start your day with a delicious breakfast!",
      qrCode:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
      gradient: "linear-gradient(45deg, #1d2671, #c33764)", // Purple Gradient
      icon: "snack-icon",
    },
    {
      id: 2,
      title: "Lunch",
      validity: "valid until 04.07.2023",
      description: "Enjoy a hearty and healthy lunch!",
      qrCode:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
      gradient: "linear-gradient(45deg, #56ab2f, #a8e063)", // Green Gradient
      icon: "meal-icon",
    },
    {
      id: 3,
      title: "Dinner",
      validity: "valid until 04.07.2023",
      description: "Relax with a luxurious dinner to end your day.",
      qrCode:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
      gradient: "linear-gradient(45deg, #ff7e5f, #feb47b)", // Orange Gradient
      icon: "cake-icon",
    },
  ];

  const handleTokenClick = (token) => {
    setSelectedToken(token);
  };

  const closeModal = () => {
    setSelectedToken(null);
  };

  return (
    <div className="container ">
      <div className="row d-flex flex-row justify-content-center mt-5">
        {tokens.map((token) => (
          <div
            key={token.id}
            className={`token bg-primary text-black mb-3 mx-2 ${token.icon}`}
            onClick={() => handleTokenClick(token)}
          >
            <div className="d-flex align-items-center">
              <div className="barcode barcode-icon"></div>
              <div className={`icon ${token.icon} mx-3`}></div>
              <div className="details">
                <h2>{token.title}</h2>
                <p>{token.validity}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedToken && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div
              className="modal-dialog"
              role="document"
              style={{
                backgroundImage: selectedToken.gradient,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div className="modal-content">
                <div className="modal-header text-black">
                  <h5 className="modal-title">{selectedToken.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body text-center text-black">
                  <p className="fs-5">{selectedToken.description}</p>
                  <img
                    src={selectedToken.qrCode}
                    alt="QR Code"
                    className="img-fluid mb-3"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <p className="mt-3">{selectedToken.validity}</p>
                  <a
                    href={selectedToken.qrCode}
                    download={`${selectedToken.title}-QRCode`}
                    className="btn btn-light mt-3"
                  >
                    Download QR Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    <div className="row ">
    <div className="col d-flex flex-row justify-content-center mt-5">
                  <div
                    className="card mb-3"
                    style={{
                      background: "linear-gradient(135deg, #56ab2f, #a8e063)", // Gradient colors
                      borderRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      color: "white",
                      padding: "30px",
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
    </div>
      
    </div>
  );
};

export default Tokens;
