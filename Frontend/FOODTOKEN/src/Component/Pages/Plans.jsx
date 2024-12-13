import React, { useState } from "react";
import "./Plans.css";

function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, price: "Rs. 35 /-", title: "Breakfast", description: "One time" },
    { id: 2, price: "Rs. 60 /-", title: "Lunch", description: "One time" },
    { id: 3, price: "Rs. 60 /-", title: "Dinner", description: "One time" },
    {
      id: 4,
      price: "Rs. 3300 /-",
      title: "One Month",
      description: "Breakfast, Lunch, Dinner",
    },
    {
      id: 5,
      price: "Rs. 6200 /-",
      title: "Two Months",
      description: "Breakfast, Lunch, Dinner",
    },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  const handlePayment = () => {
    alert("Payment successful! Invoice will be downloaded.");
    // Simulating invoice download
    const element = document.createElement("a");
    const file = new Blob(
      [
        `Invoice\nPlan: ${selectedPlan.title}\nPrice: ${selectedPlan.price}\nDescription: ${selectedPlan.description}`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${selectedPlan.title}-Invoice.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <div className="element container">
        <span style={{ color: "white" }}>Our</span>
        <span style={{ color: "black" }}> Food Plans</span>
        <div className="row">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`col ${plan.id % 2 === 0 ? "plans-right" : "plans-left"}`}
              onClick={() => handlePlanClick(plan)}
            >
              <span>{plan.price}</span>
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedPlan.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fs-5">{selectedPlan.description}</p>
                <p className="text-muted">{selectedPlan.price}</p>
                <button
                  className="btn btn-success mt-3"
                  onClick={handlePayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plans;
