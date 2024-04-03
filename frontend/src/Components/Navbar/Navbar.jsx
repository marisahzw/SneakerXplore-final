import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../Assets/BGNoT.png';
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from 'scrollreveal';

const Navbar = () => {
    useEffect(() => {
        ScrollReveal().reveal('.nav-complete', {
            delay: 200,
            duration: 2000,
            distance: '80px',
            origin: 'top',
            reset:true
        });
    }, []);

    const navigate = useNavigate();
    const [menu, setMenu] = useState("home");
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };
    
    return (
        <div className="nav-complete">
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <ul id="nav-menu1" className="nav-menu">
                    <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("sneakers") }}><Link style={{ textDecoration: 'none' }} to='/sneakers'>Sneakers</Link>{menu === "sneakers" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("calendar") }} ><Link style={{ textDecoration: 'none' }} to='/calendar'>Calendar</Link>{menu === "calendar" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("forum") }} ><Link style={{ textDecoration: 'none' }} to='/forum'>Forum</Link>{menu === "forum" ? <hr /> : <></>}</li>
                </ul>
                {isLoggedIn ? (
                    <>
                        <div className="nav-profile">
                            <Link to='/profile'><i className="fas fa-user">Profile</i></Link>
                        </div>
                        <div className="nav-logout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                ) : (
                    <div className="nav-login">
                        <Link to='/login'><button>Login</button></Link>
                    </div>
                )}
            </div>
            <div className="underText">
                <h2>"Step In Style"</h2>
            </div>
        </div>
    )
}

export default Navbar;
