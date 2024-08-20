import React from 'react'



import {FaHome,FaPhoneAlt,FaEnvelope,FaPrint, FaMagic, FaHeart, FaSearch, FaLocationArrow, FaYoutube, FaInstagram, FaGoogle, FaTwitter} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='container-fluid  my-2 bg-dark ' style ={{borderRadius:'10px' ,border: '1px solid white ', height:'670px'}}>
     <br></br>
   
     

      <div className="my-3 container-fluid ">
        <div className='row my-3 text-white'>
            <br></br>
            <h4 className="text-white" style={{color:'yellow'}}> <b style={{color:'#1AFA64'}} >Shikari <FaMagic/> </b> </h4>
            <br></br>
            <br></br>
            <p> Best way to make ur trips , journeys into beautiful memories  </p>
            <br></br>
            <br></br>




            
        <div className='col-md-3 col-sm-12' style={{color:'white'}}>
            <h4 className="text-yellow"  style={{color:'yellow'}}> <b>Services </b> <FaHeart/>  </h4>
            <p >About</p>
            <p>Return Policy </p>
            <p> Customer Service </p>
        </div>

        <div className='col-md-3 col-sm-12' style={{color:'white '}}>
         <h4 className="text-yellow" style={{color:'yellow'}}>  <b>Social Media  </b> <FaSearch/> </h4>
         <p> <b>Location </b> <div  className="container my-2"> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15278.959856852973!2d80.82115875!3d16.78960805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713250355887!5m2!1sen!2sin" width="200" height="200" style={{border:0,allowFullscreen:" ", loading:"lazy"}}/></div></p>
       
       <FaYoutube className="icons youtube mx-2" style={{height:'50px',width:'40px' ,color:'red'}}/> 

        
       <FaInstagram  className="icons instagram mx-2" style={{height:'50px',width:'40px' ,color:'red'}}/> 
        
       <FaGoogle  className=" icons google mx-2" style={{height:'50px',width:'40px' ,color:'blue'}}/> 

       <FaTwitter className="icons twitter mx-2" style={{height:'50px',width:'40px' ,color:'blue'}}/>
    
        </div>
        <div className='col-md-3 col-sm-12' style={{color:'white'}}>
            <h4 className=" " style={{color:'yellow'}}><b> Address</b> <FaLocationArrow/> </h4>
            <FaHome className='mx-2'/> Vijayawada
            <br/> 
           
            <FaPhoneAlt className='mx-2'/> +916301017157
            <br/>
            <FaEnvelope className='mx-2'/>shaiksabu234@gmail.com
            <br/>
            <FaPrint className='mx-2'/> Good boy
            <br/>
            
        </div>

       
        </div>


        </div>
        </div>
      
  )
}
