import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container paddingTopBottom">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-center">
            <h4>CoderzNinja - Redefine Your Business with Technology</h4>
          </div>
          <div className="col-12 col-md-2 section">
            <h3>Company</h3>
            <ul className="footerList">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="service">Services</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 section">
            <h3>Services</h3>
            <ul className="footerList">
              <li>Web Application Development</li>
              <li>UI/UX prototyping</li>
              <li>Mobile Application development</li>
              <li>Quality Assurance & Testing</li>
              <li>SEO & Digital Marketing</li>
            </ul>
          </div>
          <div className="col-12 col-md-2 section">
            <h3>Follow Us</h3>
            <div class="wrapper">
              <div class="facebook holder">
                <a
                  class="icon"
                  target="_blank"
                  href="https://www.linkedin.com/company/coderz-ninja/"
                >
                  <BsFacebook />
                </a>
                <span class="tooltip">Facebook</span>
              </div>
              <div class="twitter holder">
                <a
                  class="icon"
                  target="_blank"
                  href="https://twitter.com/coderz_ninja"
                >
                  <GrTwitter />
                </a>
                <span class="tooltip">Twitter</span>
              </div>
              <div class="instagram holder">
                <a
                  class="icon"
                  target="_blank"
                  href="https://www.instagram.com/coderz.ninja/"
                >
                  {/* <i class="fa-brands fa-instagram"></i> */}
                  <GrInstagram  className=""/>
                </a>
                <span class="tooltip">Instagram</span>
              </div>
              <div class="github holder">
                <a class="icon" target="_blank"
                  href="https://www.linkedin.com/company/coderz-ninja/">
                  <BsLinkedin className="fa-brands"/>
                </a>
                <span class="tooltip">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
