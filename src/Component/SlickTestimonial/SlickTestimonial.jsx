import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import male from "../../Image/common/male.svg";
import female from "../../Image/common/female.svg";
import male2 from "../../Image/common/male2.svg";
const SlickTestimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initialize the isMobile state on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillStyle = {
    width: isMobile ? "95%" : "100%",
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="aboutUs">
      <div style={skillStyle}>
        <div className="container paddingTopBottom headingUnderline">
          {/* <h2 className='text-center mb-5'>Testimonial</h2> */}
          <h2 className="text-center svg-container mb-5">Testimonial</h2>
          <Slider {...settings}>
            <figure className="snip1157" id="content">
              <div className="testimonial">
                <blockquote>
                  Fantastic Custom App Development Agency! We had a unique and
                  challenging app idea, and they turned it into reality
                  flawlessly. Their team's creativity, technical skills, and
                  attention to detail were evident in every aspect of the
                  project. The final product they delivered surpassed our
                  expectations, and we couldn't be happier with the results.
                  Highly recommend their services! ⭐️⭐️⭐️⭐️⭐️
                </blockquote>
                <div></div>
              </div>
              <div className="authorContainer">
                <img src={male} alt="sq-sample3" />
                <div className="author">
                  <h6>Robert Smith</h6>
                  <span>CEO, BYTM Inc</span>
                </div>
              </div>
            </figure>
            <figure className="snip1157" id="content">
              <div className="testimonial">
                <blockquote>
                  Highly recommended software development agency. They tackled
                  our complex project with precision, delivering on time and
                  within budget. Impressed by their expertise and
                  professionalism. ⭐️⭐️⭐️⭐️⭐️
                </blockquote>
                <div></div>
              </div>
              <div className="authorContainer">
                <img src={female} alt="sq-sample3" />
                <div className="author">
                  <h6>James Turner</h6>
                  <span>CEO, The Growth Co.</span>
                </div>
              </div>
            </figure>
            <figure className="snip1157" id="content">
              <div className="testimonial">
                <blockquote>
                  We value our relationship with Coderz Ninja. They've proven
                  themselves to be capable and willing partners in numerous
                  development projects, and their ability to code in many
                  environments gives us the confidence that we'll be able to
                  handle any new business opportunities that come our way.
                </blockquote>
                <div></div>
              </div>
              <div className="authorContainer">
                <img src={male2} alt="sq-sample3" />
                <div className="author">
                  <h6>Pelican Steve</h6>
                  <span>MD, Savant System LLC</span>
                </div>
              </div>
            </figure>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickTestimonial;
