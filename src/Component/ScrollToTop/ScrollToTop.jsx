import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Show the button when the user scrolls down 300 pixels or more
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // This will make the scrolling smooth
      });
    };
  
    if (!isVisible) {
      return null; // If the button is not visible, render nothing
    }
    return (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp className="scrollUp"/>
        </button>
      );
};

export default ScrollToTop;