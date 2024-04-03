import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Arrivals from '../Components/Nike/Arrivals/Arrivals'
import Converse from "../Components/Sneakerlinks/Converse";
import Vans from "../Components/Sneakerlinks/Vans";
import './css/home.css';
import HomeText from "../Components/HomeTxt/HomeText";
import ScrollReveal from 'scrollreveal';
import NewBalance from "../Components/Sneakerlinks/NewBalance";

const Home = () => {
    useEffect(() => {
        ScrollReveal().reveal('#hometext', {
            duration: 2000,
            distance: '80px',
            origin: 'right',
            reset:true
        });
        ScrollReveal().reveal('#hero', {
            delay: 400,
            duration: 2000,
            distance: '100px',
            origin: 'left',
          
        });
        ScrollReveal().reveal('#vans', {
            delay: 600,
            duration: 2000,
            distance: '80px',
            origin: 'top',
          
        });
        ScrollReveal().reveal('#Arrivals', {
            delay: 800,
            duration: 2000,
            distance: '80px',
            origin: 'right',
           
        });

        ScrollReveal().reveal('#NewBalance', {
            delay: 800,
            duration: 2000,
            distance: '80px',
            origin: 'bottom',
           
        });
        ScrollReveal().reveal('#Converse', {
            delay: 2500,
            duration: 2000,
            distance: '80px',
            origin: 'bottom',
            
        });
    }, []);

    return (
        <div className="home">  
            <div id="hometext">
                <HomeText />
            </div>
            <div id="hero">
                <Hero />
            </div>

            <div id="NewBalance">
                <NewBalance />
            </div>


            <div id="vans">
                <Vans />
            </div>
            <div id="Arrivals">
                <Arrivals />
            </div>
            <div id="Converse">
                <Converse />
            </div>     
        </div>
    )
}

export default Home;
