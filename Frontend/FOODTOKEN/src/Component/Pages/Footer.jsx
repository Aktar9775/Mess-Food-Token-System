import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

 import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="container">
      <div className="row">
        <div className="col">
          <p> Stay Connected <br></br>
          <FontAwesomeIcon icon={faEnvelope} className='icon1'/>
          <FontAwesomeIcon icon={faEnvelope} className='icon1'/>
          <FontAwesomeIcon icon={faEnvelope} className='icon1'/>
          </p>
          <h1 style={{color:"black"}}> Enjoy your</h1>
          <h1 >
          Delicious Food
         
          </h1>
          <p style={{fontSize:"15px"}}>
          Email:example@gmail.com<br/>
          Phone:9787513571
          </p>
        </div>
        <div className="col m-2">
          <p style={{fontSize:"13px", textAlign:"center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laboriosam similique. Vel reprehenderit hic iure magnam necessitatibus neque obcaecati totam ullam, praesentium odio error aliquid tempore! Distinctio iste officia velit.
          </p>
        </div>
       
        <div className="col m-1">
          <h2> Feedback</h2>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name=""
              id=""
              aria-describedby="emailHelpId"
              placeholder="abc@mail.com"
            />
            <label htmlFor="" className="form-label">Text Area</label>
            <input
              type="text"
              className="form-control"
              name=""
              id=""
             
              placeholder="Write your massage"
            />
            <button className='btn bg-black text-white m-2 center'>Send</button>
          </div>
          
        </div>
      </div>
      </div>
      <div>
          <hr />
          <p style={{textAlign:"center", marginBottom:"-40px", fontSize:"15px"}}>
          Copyright © 2022. CUH Mees Food. All rights reserved.
          </p>
      </div>
    </div>
  )
}
export default Footer

