import React from "react";
import './Hero.css';
import hero_video from '../Assets/Hero/heroo-2.mp4';
import { Link } from 'react-router-dom'; 

const Hero = () =>{
    return (
        <div className="hero">
            <div className="hero-video">
                <video src={hero_video} autoPlay loop muted />
            </div>
            <div className="content">
                <h1>Welcome to our Sneaker Store</h1>
                <p>Find the latest trends and styles in sneakers!</p>
                <br/>
                <Link to="/sneakers" id="myBtn">Shop Sneakers</Link>
            </div>
        </div>
    );
}

export default Hero;
