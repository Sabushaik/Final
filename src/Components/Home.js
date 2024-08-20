import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import {useLocation} from'react-router-dom';
import DivBlock from './DivBlock';
import img1 from "../Images/img1.jpg"
import img2 from"../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img5 from "../Images/img5.jpg"

import img8 from "../Images/img8.jpg"
import img9 from "../Images/img9.jpeg"
import img7 from "../Images/img7.jpg"
import './Home.css' 

function Home() {
  const location = useLocation();
  const receivedData = location.state?.data;

  const[mode, setmode]=useState('light');

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }

  useEffect(() => {
    // This effect runs after the component mounts
    // It adds a class to trigger the animation
    const boxes = document.querySelectorAll('.boxMan');
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('animate-in');
      }, index * 200); // Delay each box animation by 200ms
    });
  }, []);
  return (
  
  <div  style={{display:'flex' ,flexDirection:'column'}}>
  <Navbar mode={mode} toggleMode={toggleMode} />
   
 <DivBlock/>
 <div className="Tc" >

 
 <div className="boxMan small"><Link to="/Food"     ><img src={img7} width={'200px'} height={'200px'}  style={{borderRadius:'10px' ,boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
 </Link> 
  <h3 style={{position: 'relative', left: '50px'}}>Food</h3></div>
 
  <div className="boxMan medium">
<a href="https//www.google.com/" >   <img src={img5}  width={'200px'} height={'200px'} style={{borderRadius:'10px' , boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
</a> <h3 style={{position:'relative' ,left:'50px'}} >Globe</h3></div>
  
  <div className="boxMan small">  <Link to="/Hotel">
    <img src={img8}  width={'200px'} height={'200px'} style={{borderRadius:'10px',boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/>
    </Link>
     <h3 style={{position:'relative' ,left:'50px'}}> Hotel</h3></div>

  <div className="boxMan medium">
  <Link to="/Travel"> <img src={img9} width={'200px'} height={'200px'} style={{borderRadius:'10px',boxShadow: '5px 5px 8px rgb(158, 156, 156)'}}/> </Link> 
     <h3 style={{position:'relative',left:'50px' , marginBottom: '0.5rem'}}>Transport</h3></div>
  
</div>

 <div style={{marginTop:'20px'}}>
    <Footer style={{marginTop:'20px'}}/>
    </div>
    </div>
    

  )
}

export default Home