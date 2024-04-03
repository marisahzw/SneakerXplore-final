import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


import "./HomeText.css";

const HomeText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const contentWidth = container.scrollWidth - container.clientWidth;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(container, {
      scrollLeft: contentWidth,
      ease: "none",
      duration: 5,
    })
      .to(container, {
        scrollLeft: 0,
        ease: "none",
        duration: 5,
      })
      .to(container, {
        scrollLeft: contentWidth / 2,
        ease: "none",
        duration: 2.5,
      })
      .to(container, {
        scrollLeft: 0,
        ease: "none",
        duration: 2.5,
      });

   
    
  }, []);

  return (
    <div className="addtext-container">
      <div className="additional-text">
        <p>Where Sneaker Dreams, Meet Price Reality!</p>
      </div>
      <div id="add-text" className="add-text-container" ref={containerRef}>
        <div className="additional-text1">
          <p className="txt">Immerse yourself in the vibrant world of sneaker culture,
           where footwear transcends mere utility and becomes a symbol of identity, expression, and passion.</p>
          <p className="txt">From the bustling streets of urban centers to the digital realms of online communities,
           sneakers have evolved into more than just shoes – they're coveted artifacts that tell stories and spark conversations.</p>
          <p className="txt">Our site is dedicated to enriching this culture by providing a seamless platform 
          that connects sneaker enthusiasts with their most coveted pairs. Whether you're a seasoned sneakerhead
           or a newcomer eager to explore this fascinating world, our mission is clear: to make the sneaker-buying
            experience as enjoyable and accessible as possible for everyone.</p>
          <p className="txt">With our extensive network of reputable sneaker stores and cutting-edge technology,
           we strive to offer a diverse selection of sneakers, ranging from timeless classics to the latest releases.
            No longer will you have to scour countless websites or wait in endless lines to get your hands on the sneakers you desire.</p>
          <p className="txt">Our platform streamlines the process, giving you instant access to an unparalleled selection of footwear.
           But our commitment doesn't stop there. We understand that sneaker culture is inclusive and diverse, encompassing people from all walks of life.</p>
          <p className="txt">That's why we prioritize inclusivity and accessibility, ensuring that everyone –
           from hardcore collectors to casual buyers – can enjoy the thrill of finding their perfect pair.</p>
          <p className="txt">So, whether you're hunting down rare collaborations, seeking everyday essentials,
           or simply exploring the latest trends, join us on this journey through sneaker culture. 
           Step into style effortlessly with instant access to an extensive network of sneaker stores – your next perfect pair awaits!</p>
        </div>

       
      </div>

  
    </div>
  );
};

export default HomeText;
