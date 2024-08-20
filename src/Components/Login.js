import React, { useState ,useEffect } from 'react';
import './Login.css';
import {Link , Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
  
    // Simulated fetch function to get user data
   
    const[shikaris , setStudents]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/shikari/get")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
      },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const users = shikaris;
        const user = users.find(
            (user) => user.name === name && user.email === email && user.password === password
        );

        if (user) {
            console.log('Login successful');
         
            setError('');
            
            navigate('/home', { state: { data:user } });
            alert("Wlecome back  " + name);
            // Proceed with successful login actions
        } else {
            console.log('Invalid credentials');
            setError('Invalid name, email, or password');
        }
    };

    return (
        <>
         <div style={{ marginBottom: '20px' }}> </div>
        <div className="login-container">
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>

            </form>
            <br/> <h4>New user </h4> <p>No worries Login</p> <Link to="/sign"><button type="submit">Signup</button> </Link>
        </div>
        
        </>
    );
};

export default Login;
