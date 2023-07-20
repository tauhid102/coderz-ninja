import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import team from "../../Image/common/team.png";
import icon from "../../Image/common/contactIcon.svg";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutUs" id="about">
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center svg-container">About Us</h2>
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
                Coderz.Ninja, your premier destination for cutting-edge Software
                Applications. We are one of the leading IT services provider and
                we specialize in Custom Software Development, catering to Web,
                Mobile, and Cloud services. With a focus on delivering top-tier
                quality products, our industry-standard SQA services guarantee
                solutions that exceed your expectations.
              </p>
              <ul className="aboutusList">
                <li>
                  <img src={icon} alt="" />
                  <p>Dynamic team of creative, experienced and fresh individuals.</p>
                </li>
                <li>
                  <img src={icon} alt="" />
                  <p>With a passion for user-centric design, we create intuitive
                  and user-friendly.</p>
                </li>
                <li>
                  <img src={icon} alt="" />
                  <p>There is absolutely no compromise when it comes to quality.</p>
                </li>
                <li>
                  <img src={icon} alt="" />
                  <p>Domain Experience of various industries.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
