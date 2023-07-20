import React, { useEffect } from "react";
import development from "../../Image/service/web-development.svg";
import projectplan from "../../Image/service/project-management.svg";
import design from "../../Image/service/ui-ux.svg";
import apps from "../../Image/service/mobile-app-development.svg";
import quality from "../../Image/service/quality-assurance.svg";
import seo from "../../Image/service/seo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container paddingTopBottom headingUnderline" id="service">
      <h2 className="text-center svg-container">Our Service</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div
            className="service-card p-4 border service-card1 shadow"
            // data-aos="fade-right"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={development} width="60px" />
            <div className="card-body">
              <h3 className="mt-4 mb-4">Web Application Development</h3>
              <p className="card-text">
                We listen, understand and guide our clients with their
                requirements and develop softwares aligning with client needs.
                Our Development team are experts in developing dynamic solutions
                for the client
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="service-card p-4 border service-card2 shadow"
            // data-aos="fade-down"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={projectplan} width="60px" />
            <div className="card-body">
              <h3 className="mt-4 mb-4">Project Management</h3>
              <p>
                We make sure our projects are completed on time, within budget
                and covering all project scopes. We monitor our projects and
                collaborate with clients to build better reliable softwares.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="service-card p-4 border service-card3 shadow"
            // data-aos="fade-left"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={design} width="60px" />
            <div className="card-body">
              <h3 className="mt-4 mb-4">UI/UX prototyping</h3>
              <p>
                We have a team of exceptionally creative UI/UX experts who
                design and develop prototypes for our projects. Our team works
                seamlessly to come up with innovative designs for our projects.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="service-card p-4 border service-card4 shadow"
            // data-aos="fade-right"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={apps} width="60px" />
            <div className="card-body">
              <h3 className="mt-4 mb-4">Mobile Application development</h3>
              <p>
                We build applications for both android and iOS mobiles. We have
                a talented experts who know their craft inside out and produce
                quality applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="service-card p-4 border service-card5 shadow"
            // data-aos="fade-up"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={quality} width="60px" />
            <div className="card-body ">
              <h3 className="mt-4 mb-4">Quality Assurance & Testing</h3>
              <p>
                Our team consists of dynamic and eagle-eyed QA experts who are
                experts in detecting bugs and dysfunctions in applications. They
                make sure nothing misses their quality reports.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
            className="service-card p-4 border service-card6 shadow"
            // data-aos="fade-left"
            // data-aos-delay="50"
            // data-aos-duration="1000"
          >
            <img src={seo} width="60px" />
            <div className="card-body">
              <h3 className="mt-4 mb-4">SEO & Digital Marketing</h3>
              <p>
                We have a number of SEO experts who make sure your website stays
                on the front page. With strategic marketing specialists onboard,
                we ensure more traffic and customer conversions for your brand's
                advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
