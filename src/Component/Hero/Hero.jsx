import React from "react";
import image from "../../Image/heroImage.png";
const Hero = () => {
  return (
    <div className="container hero-section">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 hero-text">
          <div className="">
            <h2 className="heroFont">
              Encourage innivation with
              <br /> trusted{" "}
              <span className="heroFont-color">Technology Solutions</span>
            </h2>
            <p>
              A leading IT solution provider to transform your business
              digitally. We are committed to excellence and believe Customer
              Satisfaction is the key to long term business.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <img src={image} width='100%' height= 'auto 'alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
