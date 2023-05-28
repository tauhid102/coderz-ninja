import React from "react";

const Contact = () => {
  return (
    <div className="aboutUs">
      <div className="container paddingTopBottom">
        <h2 className="text-center contactBody">Contact</h2>
        <p className="text-center">
          Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
          nihil id ratione ea sunt quis dolorem dolore earum
        </p>
        <div className="row g-4 mt-5">
          <div class="col-12 col-lg-4 contactLeftBG">
            <div className="insideContact hoverEffect1">
                <div className="">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <h5>Location</h5>
                    <p>A108 Adam Street, New York, NY 4232423</p>
                </div>
            </div>
            <div className="insideContact mt-3 hoverEffect2">
                <div className="">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <h5>Email</h5>
                    <p>contact@coderzninja.com</p>
                </div>
            </div>
            <div className="insideContact mt-3 hoverEffect3">
                <div className="">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                    <h5>Phone</h5>
                    <p>+8801837184946</p>
                </div>
            </div>
            <div className="insideContact mt-3 hoverEffect4">
                <div className="">
                <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                    <h5>Open Hours</h5>
                    <p>Mon-Sat: 11AM - 23PM</p>
                </div>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            
          <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
