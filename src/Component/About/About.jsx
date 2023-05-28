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
      <div className="container paddingTopBottom">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div
            className="col"
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={team} alt="team picture" width="100%" />
          </div>
          <div
            className="col aboutText"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div>
              <h2>We are A Team</h2>
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