import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutUs">
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center contactBody">Contact</h2>
        <div className="row g-4 mt-5" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <div class="col-12 col-lg-4 contactLeftBG">
            <div className="insideContact hoverEffect1">
              <div className="">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="contactText">
                <h5>Location</h5>
                <p>A108 Adam Street, New York</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect2">
              <div className="">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="contactText">
                <h5>Email</h5>
                <p>contact@coderzninja.com</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect3">
              <div className="">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="contactText">
                <h5>Phone</h5>
                <p>+8801837184946</p>
              </div>
            </div>
            <div className="insideContact mt-3 hoverEffect4">
              <div className="">
                <i class="fa-solid fa-clock"></i>
              </div>
              <div className="contactText">
                <h5>Open Hours</h5>
                <p>Mon-Sat: 11AM - 23PM</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8 p-5 contactFrom">
            <form class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" id="inputEmail4"  placeholder="Your Name"/>
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Your Email"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Subject"
                />
              </div>
              <div class="col-12">
                <textarea
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Message"
                  rows='6'
                />
              </div>
              <div class="col-12 d-flex align-center">
                <button type="submit" class="mx-auto contactButton">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
