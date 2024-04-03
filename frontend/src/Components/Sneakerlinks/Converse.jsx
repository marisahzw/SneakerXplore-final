import React from "react";
import converse_image from './Assets/images/converse.jpg';
import './Assets/css/Converse.css'; 

const Converse = () => {
    return (
        <div className="page-wrapper"> 
            <div className="converse-container">
                <a href="https://converse.ca/shoes/launch/" target="_blank" rel="noopener noreferrer"> 
                    <img src={converse_image} alt="Converse Shoes" className="converse-image" /> 
                </a>
                <div className="text-container"> 
                    <div className="modular-title --overlay"> 
                        <div className="flex placement D--position-center D--position-middle M--position-middle M--position-center"> 
                            <div className="text_style --white D--align-center M--align-center"> 
                                <p>Available Now</p>
                                <h2>Converse x Stüssy</h2>
                                <p>The iconic collab returns, bringing ’</p>
                                 <p>90s-style suede to the Chuck 70.</p>
                                <a className="__button" href="https://converse.ca/shoes/launch/" target="_blank" rel="noopener noreferrer">Shop</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converse;
