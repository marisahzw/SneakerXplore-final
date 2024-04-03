import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/LoginSignup.css';

const LoginSignup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate(); // Using useNavigate instead of useHistory

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to sign up");
            }
            setSuccessMessage("User registered successfully");
            setError(null);
            // Redirect to login page after successful signup
            navigate('/login'); // Using navigate instead of window.location.href
        } catch (error) {
            setSuccessMessage("");
            setError(error.message);
        }
    };

    return (
        <div className="loginSignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button  className="loginSignup-button"  onClick={handleSignup}>Sign Up</button>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <p className="loginsignup-login"> Already have an account? <Link to="/login">Log In</Link> </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> I agree to the terms of use & privacy policies</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
