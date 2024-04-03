import { gsap } from 'gsap';

// Function to handle smooth scrolling
export const scrollTo = (target) => {
  gsap.to(window, {
    scrollTo: {
      y: target,
      autoKill: false // Prevents scroll animation from being canceled when a new scroll is initiated
    },
    duration: 1, // Adjust duration as needed
    ease: 'power2.inOut' // Adjust ease as needed
  });
};
