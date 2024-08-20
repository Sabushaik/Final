import React,{useState} from 'react' 
import { FaHome,FaPhoneAlt,FaEnvelope,FaPrint, FaMagic, FaHeart, FaSearch, FaLocationArrow, FaYoutube, FaInstagram, FaGoogle, FaTwitter, FaBook, FaLock, FaUser ,FaLandmark, FaSearchLocation, FaHotel} from 'react-icons/fa'

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
function Navbar(props) {
  const myStyle={
    borderRadius: '1px',
    border:'2px solid white'
  }
  const [showNavExternal3, setShowNavExternal3] = useState(false);
 
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } style={myStyle} >
    <div className="container-fluid" >
      <img className="mx-2" src="https://t4.ftcdn.net/jpg/05/66/23/45/360_F_566234573_0wRtGNCoV93vm3nCcBuRDIEJOq4BXlQ2.jpg" width="50px" height="50px" style={{borderRadius:'10px'}}/>
<a className="navbar-brand" href="/shikari">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home"> <FaHome className="mx-1" /> <b>  Home </b> </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/text"  > <FaBook className="mx-1" /> <b>{props.about} </b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Design" > <FaSearchLocation className="mx-1" />  <b>Guides</b>  </Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/ImageSearch"  > <FaHotel className="mx-1"/> <b>Hotels </b></Link>
          </li>
        </ul>
        
   {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success" type="submit">Search</button> 
  </form>*/}
  
  <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}  >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Change Mode</label>
</div>



      </div>
    </div>
  </nav>
 
    
  )
}

Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    about:PropTypes.string

}
Navbar.defaultProps ={
    title:'Shikari' ,
    about: 'About Shikari'

};
export default Navbar
