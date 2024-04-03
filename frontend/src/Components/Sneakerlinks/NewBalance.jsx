import React from "react";
import newbalance_image from './Assets/images/newbalance.jpg';
import './Assets/css/Newbalance.css'; 

const NewBalance = () => {
    return (
        <div className="page-wrapper"> 
            <div className="newbalance-container">
                
                    <img src={newbalance_image} alt="Converse Shoes" className="newbalance-image"  height="500" width="100%" /> 
            
                <div className="text-newbalance"> 
                    <div className="modular-title --overlay"> 
                        <div className="text-newb"> 

                            <div className="newbalance-text"> 
                                <h2>New Balance</h2>
                                <p>Refresh your wardrobe with new Balance sales</p>
                                <button className="__button" href="https://www.newbalance.ca/en_ca/sale/?prefn1=productClass&prefv1=Shoes" target="_blank" rel="noopener noreferrer">Shop New Balance</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBalance;
