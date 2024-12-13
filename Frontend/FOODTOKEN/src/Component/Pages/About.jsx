import React from 'react'
import './about.css'
import img1 from "../Images/About.png"
export default function About() {
  return (
   <>
    <div className=' About'>
     <div className="row">
      <div className="col">
         <img src={img1} alt="not show" height={400}  style={{marginLeft:"100px"}}/>
      </div>
      <div className="col center text-white ">
      <h1 style={{color:"Black", marginTop:"60px"}}>"About"</h1>
      <p>
        <h1>CUH Mees Food</h1>
        CUH Mees Food is an online Website For Central University of Haryana which provides 3 meals of the day, viz, breakfast, Lunch and Dinner to customers daily throughout the month with a pre-paid subscription plan.

        CUH Mees Food in coordination with the local Government authorities, will be taking part of the Central University of Haryana Community Hostels.</p>
      </div>
     </div>
    </div>
   
   
   </>
  )
}
