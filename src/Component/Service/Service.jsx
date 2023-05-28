import React, { useEffect } from "react";
import development from "../../Image/development.png";
import projectplan from "../../Image/project-planning.png";
import design from "../../Image/design.png";
import apps from "../../Image/apps-develop.png";
import quality from "../../Image/quality-badge.png";
import seo from "../../Image/seo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div className="container paddingTopBottom" id="service">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="service-card p-4 border service-card1 shadow" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={development} width="80px" />
              <h2 className="mt-4 mb-4">Web Application Development</h2>
              <p>
                We listen, understand and guide our clients with their
                requirements and develop softwares aligning with client needs.
                Our Development team are experts in developing dynamic solutions
                for the client
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="service-card p-4 border service-card2 shadow" data-aos="fade-down"  data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={projectplan} width="80px" />
              <h2 className="mt-4 mb-4">Project Management</h2>
              <p>
                We make sure our projects are completed on time, within budget
                and covering all project scopes. We monitor our projects and
                collaborate with clients to build better reliable softwares.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="service-card p-4 border service-card3 shadow" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={design} width="80px" />
              <h2 className="mt-4 mb-4">UI/UX prototyping</h2>
              <p>
                We have a team of exceptionally creative UI/UX experts who
                design and develop prototypes for our projects. Our team works
                seamlessly to come up with innovative designs for our projects.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="service-card p-4 border service-card4 shadow"data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={apps} width="80px" />
              <h2 className="mt-4 mb-4">Mobile Application development</h2>
              <p>
                We build applications for both android and iOS mobiles. We have
                a talented experts who know their craft inside out and produce
                quality applications.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="service-card p-4 border service-card5 shadow" data-aos="fade-up"  data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={quality} width="80px" />
              <h2 className="mt-4 mb-4">Quality Assurance & Testing</h2>
              <p>
                Our team consists of dynamic and eagle-eyed QA experts who are
                experts in detecting bugs and dysfunctions in applications. They
                make sure nothing misses their quality reports.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="service-card p-4 border service-card6 shadow" data-aos="fade-left"  data-aos-delay="50" data-aos-duration="1000">
            <div class="card-body">
              <img src={seo} width="80px" />
              <h2 className="mt-4 mb-4">SEO & Digital Marketing</h2>
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
