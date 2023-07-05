import React, { useEffect } from "react";
import team from "../../Image/team.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutUs">
      <div className="container paddingTopBottom headingUnderline">
      <h2 className="text-center">About Us</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div
              // data-aos="zoom-in-right"
              // data-aos-delay="50"
              // data-aos-duration="1000"
            >
              <img src={team} alt="team picture" width="100%" />
            </div>
          </div>
          <div className="col aboutText">
            <div
              // data-aos="fade-left"
              // data-aos-delay="50"
              // data-aos-duration="1000"
            >
              <h3>We are A Team</h3>
              <p>
                Coderz.Ninja is a leading service provider for Software
                Applications. We provide Custom Software Development for Web,
                Mobile and Cloud services. We provide industry standard SQA
                services, which ensures top quality products. We have a mix of
                experienced and fresh minds to steer our products towards
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
