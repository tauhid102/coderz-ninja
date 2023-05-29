import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container paddingTopBottom">
        <div class="row">
          <div class="col-12 col-md-4 d-flex align-items-center">
            <h3>Lets Bring Your Big Issue into a Bright Idea</h3>
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
            <ul className="footerList">
              <li> <a target="_blank" href="https://www.facebook.com/coderz.ninja">Facebook</a></li>
              <li> <a target="_blank" href="https://twitter.com/coderz_ninja">Twitter</a></li>
              <li> <a target="_blank" href="https://www.instagram.com/coderz.ninja/">Instagram</a></li>
              <li> <a target="_blank" href="https://www.linkedin.com/company/coderz-ninja/">Linkedin</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
