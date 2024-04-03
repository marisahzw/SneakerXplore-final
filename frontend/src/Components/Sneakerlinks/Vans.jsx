import React from "react";
import vans_image from './Assets/images/Vans.webp';
import './Assets/css/vans.css'; 

const Vans= () => {
    return (
        <div className="page-wrapper"> 
            <div className="vans-container">
                <div className="image-vans">
                    <a href="https://www.vans.ca/en-ca/shoes-c00081?icn=topnav" target="_blank" rel="noopener noreferrer">
                        <img src={vans_image} alt="Converse Shoes" className="vans-image" />
                    </a>
                </div>
               

                <div className="vansText">
                <div className="vans-text">
                    <a id="vans-button"  href="https://www.vans.ca/en-ca/shoes-c00081?icn=topnav" 
                    target="_blank" rel="noopener noreferrer">Old Meets Knu</a> 
                </div>                       
                <p className="vans-text2">The updated Knu Skool brings a fresh perspective to the next generation.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Vans;
