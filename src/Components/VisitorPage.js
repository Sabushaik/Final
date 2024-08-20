import React, { useState } from 'react';
import './Vp.css'; 
import Tourist  from "../Images/Tourist.jpg"
import Guide from "../Images/Guide.jpg"
import {  Link } from 'react-router-dom';
const VisitorPage = ({ onSelectUser, onSelectGuide }) => {
  const handleUserClick = () => {
    onSelectUser();
  };

  const handleGuideClick = () => {
    onSelectGuide();
  };

  return (
    <>
    

     <div className="background">
     

        </div> 
        <div className="centered">
    <h1>Welcome!</h1>
    </div>
    <br></br>
   <div className="centered">
   <p><h2><b>Please select your role:</b></h2></p>
    </div>
   
    <div className="image-gallery">
            <div className="centered">
              <div>
          <Link to="/Login">    <img src={Tourist} alt="Image 1" className="image" /> </Link>
          </div>
          <div>
            
              <Link to="/GLog">  <img src={Guide} alt="Image 2" className="image" /> </Link>
              </div>
          
            </div>
            <div className="row">
           
         
            </div>
        </div>
        
    </>
  );
};

export default VisitorPage;
