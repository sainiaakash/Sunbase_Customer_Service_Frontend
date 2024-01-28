import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    const responseData = await response.json();
    const { access_token } = responseData;
    localStorage.setItem('token', access_token);
    navigate('/customer-list');
    } catch (error) {
        console.error('Login failed:', error.message);
    }

  };
  
    return (
        <div className='login-container'>
            <h1>Login Page</h1>
            <form>
                <input 
                    type='text' 
                    id="username" 
                    name="username" 
                    placeholder='Username' 
                    onChange={(e)=>setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type='password' 
                    id="password" 
                    name="password" 
                    placeholder='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
};

export default Login;