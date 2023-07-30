import React, { useEffect, useState } from "react";
import image from "../../Image/common/heroImage.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Initialize the isMobile state on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const heroStyle = {
    marginTop: isMobile ? '50px' : 0,
  };
  return (
    <div className="container hero-section" id="home" style={heroStyle}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 hero-text">
          <div className="">
            <h2 className="heroFont">
              <span className="heroFont-color">CoderzNinja</span> - Redefine
              Your
              <br /> Business with Technology
            </h2>
            <p>
              A leading IT solution provider to transform your business
              digitally. We are committed to excellence and believe Customer
              Satisfaction is the key to long term business.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 heroImage">
          <img src={image} width="100%" height="auto " alt="Hero image" />
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Hero;
