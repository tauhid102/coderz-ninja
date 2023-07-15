import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickTestimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="aboutUs">
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center mb-5">Testimonial</h2>
        <Slider {...settings}>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
          <figure class="snip1157" id="content">
            <div class="testimonial">
              <blockquote>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec
                id elit non mi .
              </blockquote>
              <div></div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg"
              alt="sq-sample3"
            />
            <div class="author">
              <h6>Pelican Steve</h6>
              <span>LIttleSnippets.net</span>
            </div>
          </figure>
        </Slider>
      </div>
    </div>
  );
};

export default SlickTestimonial;
