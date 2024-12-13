import React from 'react'
import './hero.css'
import img1 from "../Images/thali1.png"
function Hero() {
  return (
  <>
  <div className="container text-center">
  <div className="row ">
    <div className="col ">
      <h3>#1 Hi CUH MESS FOOD </h3>
      <h1>Enjoy Your</h1>
      <h1 className='h text-white'>Delicious Food With Us</h1>
      <p>Pre Register to get Amazing Discounts when launched!</p>
      <button className='btn'style={{color:'white',background:'black'}}>Contact Us</button>
      <button className='btn'style={{color:'white',background:'black', marginLeft:"10px"}}>Complaint</button>
    </div>
    <div className="col">
      <img src={img1} alt="Error to load" style={{marginTop:"100px"}} className='imgThali' />
    </div>
  </div>
  </div>
  

  </>
  )
}

export default Hero
