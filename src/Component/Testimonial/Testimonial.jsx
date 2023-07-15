import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import quality from "../../Image/quality-badge.png";
const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Initialize the isMobile state on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skillStyle = {
    width: isMobile ? '95%' : "100%",
  };
  return (
    <div className="aboutUs" style={skillStyle}>
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center">Testimonial</h2>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper mt-5"
        >
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="content">
              <div class="testimonial">
                <blockquote>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </blockquote>
                <div></div>
                <p>
                  John Doe &mdash; Worcestershire, UK
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
