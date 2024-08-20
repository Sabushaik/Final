import React from 'react'
import {useLocation} from'react-router-dom';
export default function DivBlock() {
  const location = useLocation();
  const receivedData = location.state?.data;
  return (
    <>
    <div  style={{display:'flex' ,flexDirection:'column',alignContent:'center'}}>
 
    <center >
      <br/>
  <h5 style={{color:'#df80f2'}}> <marquee direction="left" > {receivedData?.name + " "}Make ur journyes into Magical Memories   </marquee> </h5></center>

{/*<div className="container-fluid my-2 " style={{border:'1px solid white ' , borderRadius:'5px ' , background:'#f571f0', width:"100%"  , height:'120px'}}>
 
  <marquee direction="right"><img src="https://text.media.giphy.com/v1/media/giphy.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJwcm9kLTIwMjAtMDQtMjIiLCJzdHlsZSI6Im5ld2Jvcm4iLCJ0ZXh0IjoiV2VsY29tZSUyMHRvJTIwU2hpa2FyaSIsImlhdCI6MTcxMzUxNTUxNX0.TO6gUKLyI644ATkmAL1unr5KsAXN7i2-_xDtaK7DHMM&cid=a559de6bd7d510b249e000f8ecc294e42ac5641ed697a816&dynamic_style=newborn&ep=v1_text_animate&rid=giphy.gif&ct=t" height="175px" widht="100px" /></marquee>
</div> */}

        <div  className="some" style={{border:'1px solid white ' , borderRadius:'5px ' , background:'white'}}>
 <br/>
 <center>   <h2 style={{color:'black', textShadow:'2px 2px 2px white'}}> <b> Shikari : Your Streamlined Travel Partner </b> </h2> </center> 
<br/>
<b>
<p style={{alignContent:'center'}}><strong>Shikari  </strong>is a comprehensive travel management platform designed to empower today's busy traveler. We understand the complexities of trip planning, and our innovative platform simplifies the process by offering a **centrally integrated solution**. 
</p> </b>
 <b><p><strong>Shikari  </strong> 

<strong>Shikari  </strong> is more than just a booking platform; it's your **trusted travel companion**.  We empower you to focus on what matters most – creating lasting memories and embarking on transformative journeys.  **Let Shikari take the reins of your travel planning, and experience the world with unparalleled ease.**

</p> </b>

<center> <h3 style={{color:'#11f74f',textShadow:'2px 2px 2px blue'} }>  <b> Hey {receivedData?.name +" "} have a Look on Our Premium Packages </b></h3></center>

                   
                  
      

      
      
   </div>
   </div>
    </>
  )
}
