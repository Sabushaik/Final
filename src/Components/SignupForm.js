import React, { useState ,useEffect } from 'react';
import './SignupForm.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const[mode, setmode]=useState('light');
  const navigate=useNavigate();

  const[shikaris ,setStudents] =useState([])

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
  const [passwordError, setPasswordError] = useState('');
  const[Ageerror , setAgeerror]=useState(' ');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset password error when user starts typing
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
    if(name=='age')
    {
      setAgeerror(' ');
    }

  };





  const handleSubmit = (e) => 
  {
   

    e.preventDefault();
    const shikari=formData;
    console.log(shikari);
    fetch("http://localhost:8080/shikari/add" ,
    {
    method:"POST",
    headers:{"Content-Type":"application/json"}
    ,
    body:JSON.stringify(shikari)

    }
    ).then(()=>{console.log("New student Added") ;   navigate('/UsignS', { state: { data: shikari } });})

   
















    if(formData.age<18 &&formData.age>110)
    {
      setAgeerror('Age is not valid');
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // Reset form fields
      setFormData({
        name: '',
        age: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

 

  return (
    <>
      <div style={{ marginBottom: '20px' }}> </div>
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title"> User Sign Up</h2>
        <div className="inputGroup">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Age</label>
          <input
            type="number"
            name="age"
            className="input"
            value={formData.age}
            onChange={handleChange}
            required
          />
           {Ageerror && <p className="error">{Ageerror}</p>}
        </div>
        <div className="inputGroup">
          <label className="label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {passwordError && <p className="error">{passwordError}</p>}
        <button type="submit" className="button"  >Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
