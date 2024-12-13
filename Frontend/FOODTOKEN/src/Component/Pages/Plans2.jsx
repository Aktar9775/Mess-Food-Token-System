import React from 'react'
import './Plans2.css'
function Plans2() {
  return (
    <div>
      
      <div className='element2 container '>
      <span style={{color:"white"}}>Our</span>
      <span style={{color:'black'}}> Food Plans</span>
        <div className="row">
          <div className="col plans2-left">
            <span>
              Rs. 35 /-
            </span>
             <h2>
             Breakfast
             </h2>
             <p>
            One time
             </p>
          </div>
          <div className="col plans2-left">
            <span>
              Rs. 60 /-
            </span>
             <h2>
              Lunch
             </h2>
             <p>
              One time
             </p>
          </div>
          <div className="col plans2-right">
            <span>
              Rs. 60 /-
            </span>
             <h2>
             Dinner
             </h2>
             <p>
            One time
             </p>
          </div>
          <div className="row">
          <div className="col plans2-left">
            <span>
              Rs. 3300 /-
            </span>
             <h2>
              One Month
             </h2>
             <p>
              Breakfast , Lunch ,Dinnner
             </p>
          </div>
          <div className="col plans2-right">
            <span>
              Rs. 6200 /-
            </span>
             <h2>
              Two Month
             </h2>
             <p>
              Breakfast , Lunch ,Dinnner
             </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans2;
