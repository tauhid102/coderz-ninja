import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container paddingTopBottom">
        <div class="row">
          <div class="col-12 col-md-4 d-flex align-items-center">
            <h4>CoderzNinja - Redefine Your Business with Technology</h4>
          </div>
          <div class="col-12 col-md-3 section">
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
          <div class="col-12 col-md-3 section">
            <h3>Services</h3>
            <ul className="footerList">
              <li>Web Application Development</li>
              <li>UI/UX prototyping</li>
              <li>Mobile Application development</li>
              <li>Quality Assurance & Testing</li>
              <li>SEO & Digital Marketing</li>
            </ul>
          </div>
          <div class="col-12 col-md-2 section">
            <h3>Follow Us</h3>
            <ul className="footerList  social">
              <li>
                {" "}
                <a target="_blank" href="https://www.facebook.com/coderz.ninja">
                  <BsFacebook />
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://twitter.com/coderz_ninja">
                  <GrTwitter />
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/coderz.ninja/"
                >
                  <GrInstagram />
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/coderz-ninja/"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
