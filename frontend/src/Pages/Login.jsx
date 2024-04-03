import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/LoginSignup.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json(); 
            if (!response.ok) {
                throw new Error(data.message || "Invalid username or password"); 
            }
            // For Storing token in localStorage
            localStorage.setItem("token", data.token);
            // Reloading the page to redirect to home page after successful login
            window.location.href = "/";
        } catch (error) {
            setError(error.message);
        }
    };
    
    
      
    return (
        <div className="loginSignup">
            <div className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="loginSignup-button" onClick={handleLogin}>Login</button>
                {error && <p className="error-message">{error}</p>}
                <p className="loginsignup-login"> Don't have an account? <Link to="/loginsignup">Sign Up</Link> </p>
            </div>
        </div>
    );
}

export default Login;
