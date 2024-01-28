import React from 'react';
import '../styles/login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <h1>Login Page</h1>
            <form>
                <input type='text' id="login" name="login" placeholder='Username'/>
                <input type='password' id="password" name="password" placeholder='password'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Login;