import React, { useEffect } from "react";
import development from "../../Image/development.png";
import seo from "../../Image/seo.svg";
import AOS from "aos";
const MakeUsDiff = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container paddingTopBottom headingUnderline">
      <h2 className="text-center">What Makes Us Different</h2>

      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div
          class="col "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="text-center p-4 backgroundDiff">
            <img src={development} width="80px" className="mx-auto" />
            <div class="card-body headingUnderline2">
              <h5 class="card-title mt-4 mb-5">Web Application Development</h5>
              <p class="card-text">
                We listen, understand and guide our clients with their
                requirements and.
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
          <div class="text-center p-4 backgroundDiff2">
            <img src={development} width="80px" className="mx-auto" />
            <div class="card-body headingUnderline2">
              <h5 class="card-title mt-4 mb-5">Web Application Development</h5>
              <p class="card-text">
                We listen, understand and guide our clients with their
                requirements and.
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
          <div class="text-center p-4 backgroundDiff3">
            <img src={development} width="80px" className="mx-auto" />
            <div class="card-body headingUnderline2">
              <h5 class="card-title mt-4 mb-5">Web Application Development</h5>
              <p class="card-text">
                We listen, understand and guide our clients with their
                requirements and.
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
          <div class="text-center p-4 backgroundDiff4">
            <img src={development} width="80px" className="mx-auto" />
            <div class="card-body headingUnderline2">
              <h5 class="card-title mt-4 mb-5">Web Application Development</h5>
              <p class="card-text">
                We listen, understand and guide our clients with their
                requirements and.
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
          <div class="text-center p-4 backgroundDiff5">
            <img src={development} width="80px" className="mx-auto" />
            <div class="card-body headingUnderline2">
              <h5 class="card-title mt-4 mb-5">Web Application Development</h5>
              <p class="card-text">
                We listen, understand and guide our clients with their
                requirements and.
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
            <div class="text-center p-4 backgroundDiff6">
              <img src={development} width="80px" className="mx-auto" />
              <div class="card-body headingUnderline2">
                <h5 class="card-title mt-4 mb-5">
                  Web Application Development
                </h5>
                <p class="card-text">
                  We listen, understand and guide our clients with their
                  requirements and.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUsDiff;
