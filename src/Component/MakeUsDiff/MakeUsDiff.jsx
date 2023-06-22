import React, { useEffect } from "react";
import development from "../../Image/development.png";
import seo from "../../Image/seo.svg";
import AOS from "aos";
const MakeUsDiff = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container paddingTopBottom ">
      <h2 className="text-center">What Makes Us Different</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        <div
          class="col "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
              <h4 className="mt-4 mb-4">Web Application Development</h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
        <div
          class="col "
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
              <h4 className="mt-4 mb-4">Web Application Development</h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
        <div
          class="col "
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
              <h4 className="mt-4 mb-4">Web Application Development</h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
        <div
          class="col "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
              <h4 className="mt-4 mb-4">Web Application Development</h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
        <div
          class="col "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
                <h4 className="mt-4 mb-4 borderBottom">
                  Web Application Development
                </h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
        <div
          class="col "
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="p-4 text-center">
            <div class="card-body diffBody">
              <img src={development} width="80px" />
              <h4 className="mt-4 mb-4 borderBottom">
                Web Application Development
              </h4>
              <p>
                We listen, understand and guide our clients with their
                requirements and
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUsDiff;
