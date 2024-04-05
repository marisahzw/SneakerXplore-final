import React, { useEffect } from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
    useEffect(() => {
        ScrollReveal().reveal('.footer', {
            delay: 1000,
            duration: 1000,
            distance: '80px',
            origin: 'right',
            reset: true
        });
    }, []);

    return (
        <div className='footer'>
            <div className="social-icons">
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
            </div>
            <div className="footer-links">
                <h3>Our Company</h3>
                <ul>
                    <li><Link to="/who-we-are">Who We Are</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about-snx">About SNX</Link></li>
                </ul>
            </div>
            <div className="footer-links">
                <h3>Brands</h3>
                <ul>
                    <li><Link to="/brands/nike">Nike</Link></li>
                    <li><Link to="/brands/vans">Vans</Link></li>
                    <li><Link to="/brands/Converse">Converse</Link></li>
                    <li><Link to="/brands/Puma">Puma</Link></li>
                    <li><Link to="/brands/Yeezy">Yeezy</Link></li>
                    <li><Link to="/brands/adidas-originals">Adidas Originals</Link></li>
                    {/* more brands here  */}
                </ul>
            </div>
            <div className="footer-links">
                <h3>Customer Care</h3>
                <ul>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                    <li><Link to="/site-map">Site Map</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
