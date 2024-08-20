import React from 'react'
import './Usign.css'
import {  Link ,useLocation } from 'react-router-dom';
export default function UserSign() {
    const location = useLocation();
    const receivedData = location.state?.data;
  return (
    <>
   
   <div className="Styling">

   </div>
     


<center>
     
<h1 style={{color:'green'}}> Hey {receivedData?.name + " " } Ur SignUp got Success in Succes</h1>
      <br>
      </br>
       

    <b>  <h2 style={{color:'Red'}}> Click the button to login</h2> </b>

<Link to="/Login" ><button type ="submit"> Login </button></Link>
</center>
    </>
  )
}
