import React, { useState ,useEffect  } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './GuideSignupForm.css'; // Import CSS file for styling

const GuideSignupForm = () => {
  const [formData, setFormData] = useState({
    guideName: '',
    guideLocation: '',
    guidePhone: '',
    guideEmail: '',
    guideAge: '',
    guideGender: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');
  const navigate=useNavigate();

  const[shikaris ,setStudents] =useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shikari=formData;
    console.log(shikari);
    fetch("http://localhost:8080/shikari/Gadd" ,
    {
    method:"POST",
    headers:{"Content-Type":"application/json"}
    ,
    body:JSON.stringify(shikari)

    }
    ).then(()=>{console.log("New student Added") ; navigate("/GuideSign" , { state: { data: shikari } })})





    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      // Handle form submission logic here (e.g., send data to backend)
      console.log(formData);
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // Reset form after submission if needed
      setFormData({
        guideName: '',
        guideLocation: '',
        guidePhone: '',
        guideEmail: '',
        guideAge: '',
        guideGender: '',
        password: '',
        confirmPassword: ''
      });
      setPasswordError('');
    }
  };

  return (
    <div className="form-container">
      <h2>Guide Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="guideName">Guide Name:</label>
          <input
            type="text"
            id="guideName"
            name="guideName"
            value={formData.guideName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guideLocation">Guide Location:</label>
          <input
            type="text"
            id="guideLocation"
            name="guideLocation"
            value={formData.guideLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guidePhone">Guide Phone:</label>
          <input
            type="tel"
            id="guidePhone"
            name="guidePhone"
            value={formData.guidePhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guideEmail">Guide Email:</label>
          <input
            type="email"
            id="guideEmail"
            name="guideEmail"
            value={formData.guideEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guideAge">Guide Age:</label>
          <input
            type="number"
            id="guideAge"
            name="guideAge"
            value={formData.guideAge}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guideGender">Guide Gender:</label>
          <select
            id="guideGender"
            name="guideGender"
            value={formData.guideGender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default GuideSignupForm;
