import React from 'react';
import './Features.css';

function Features() {
  return (
    <div>
      <div className="why">
        <span style={{ color: 'white' }}>Why</span>
        <span style={{ color: 'black' }}> Choose Us</span>
        <p>The best food for you at affordable prices</p>
        <div className="container features">
          <div className="row">
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Token+Exchange" 
                  alt="Seamless Token Exchange" 
                  height={100} 
                /><br />
                <span>Seamless Token Exchange</span>
                <p>Our system ensures quick and hassle-free food token transactions, making every meal effortless and convenient.</p>
              </div>
            </div>
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Tracking" 
                  alt="Transparent Tracking" 
                  height={100} 
                /><br />
                <span>Transparent Tracking</span>
                <p>Keep track of your food tokens and meals with our transparent and user-friendly tracking system.</p>
              </div>
            </div>
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Sustainability" 
                  alt="Sustainability Focus" 
                  height={100} 
                /><br />
                <span>Sustainability Focus</span>
                <p>Promoting zero waste and sustainable practices, our system aligns with environmental goals for a better future.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Meal+Plans" 
                  alt="Customizable Meal Plans" 
                  height={100} 
                /><br />
                <span>Customizable Meal Plans</span>
                <p>Design meal plans tailored to your dietary preferences and nutritional needs using our flexible token system.</p>
              </div>
            </div>
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Affordable" 
                  alt="Affordable Pricing" 
                  height={100} 
                /><br />
                <span>Affordable Pricing</span>
                <p>Enjoy quality food options at prices that suit your budget, with no hidden costs or surprises.</p>
              </div>
            </div>
            <div className="col">
              <div className="ele">
                <img 
                  src="https://via.placeholder.com/100?text=Accessible" 
                  alt="Accessible for All" 
                  height={100} 
                /><br />
                <span>Accessible for All</span>
                <p>Our system is designed to cater to everyone, ensuring inclusivity and accessibility in food services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
