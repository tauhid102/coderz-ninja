import React, { useEffect } from "react";
import AOS from "aos";

import { RiUserStarLine } from "react-icons/ri";
import { RxFace } from "react-icons/rx";
import { GiCash } from "react-icons/gi";
import { BsJournalCheck } from "react-icons/bs";
import { FaTimeline } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
const MakeUsDiff = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container paddingTopBottom headingUnderline">
      <h2 className="text-center svg-container">What Makes Us Different</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div
          // data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          >
            <div className="makeDiffCard text-center p-4 backgroundDiff">
              {/* <img
                src='/Image/common/development.png'
                width='80px'
                className='mx-auto'
              /> */}
              <span className="p-4 rounded icon-bg">
                <RiUserStarLine style={{ fontSize: "50px" }} />
              </span>
              <div className="card-body headingUnderline2">
                <h5 className="card-title mt-4 mb-5">Expertise</h5>
                <p className="card-text">
                  Our team of experienced software developers possesses a deep
                  understanding of the latest technologies and industry best
                  practices to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
          // data-aos="fade-down"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          >
            <div className="makeDiffCard text-center p-4 backgroundDiff2">
              {/* <img
                src='/Image/common/development.png'
                width='80px'
                className='mx-auto'
              /> */}
              <span className="p-4 rounded icon-bg">
                <RxFace style={{ fontSize: "50px" }} />
              </span>
              <div className="card-body headingUnderline2">
                <h5 className="card-title mt-4 mb-5">Client Satisfaction</h5>
                <p className="card-text">
                  We prioritize your vision and goals, collaborating closely
                  with you to develop software solutions that align with your
                  business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
          // data-aos="fade-left"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          >
            <div className="makeDiffCard text-center p-4 backgroundDiff3">
              {/* <img
                src='/Image/common/development.png'
                width='80px'
                className='mx-auto'
              /> */}
              <span className="p-4 rounded icon-bg">
                <FaTimeline style={{ fontSize: "50px" }} />
              </span>
              <div className="card-body headingUnderline2">
                <h5 className="card-title mt-4 mb-5">Timely Delivery</h5>
                <p className="card-text">
                  We pride ourselves on our commitment to delivering projects on
                  time, meeting deadlines and keeping you ahead of your
                  competition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
          // data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          >
            <div className="makeDiffCard text-center p-4 backgroundDiff4">
              {/* <img
                src='/Image/common/development.png'
                width='80px'
                className='mx-auto'
              /> */}
              <span className="p-4 rounded icon-bg">
                <BsJournalCheck style={{ fontSize: "50px" }} />
              </span>
              <div className="card-body headingUnderline2">
                <h5 className="card-title mt-4 mb-5">Compliance</h5>
                <p className="card-text">
                  We adhere to industry standards and regulatory guidelines,
                  ensuring that your software solution complies with relevant
                  regulations and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col "
          // data-aos="fade-up"
          // data-aos-delay="50"
          // data-aos-duration="1000"
        >
          <div className="makeDiffCard text-center p-4 backgroundDiff5">
            {/* <img
              src='/Image/common/development.png'
              width='80px'
              className='mx-auto'
            /> */}
            <span className="p-4 rounded icon-bg">
              <GiCash style={{ fontSize: "50px" }} />
            </span>
            <div className="card-body headingUnderline2">
              <h5 className="card-title mt-4 mb-5">Cost-Effective Solutions</h5>
              <p className="card-text">
                We understand the value of your investment, and our goal is to
                provide high-quality software solutions that offer excellent
                value for your money.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col "
          // data-aos="fade-left"
          // data-aos-delay="50"
          // data-aos-duration="1000"
        >
          <div className="makeDiffCard text-center p-4 backgroundDiff6">
            {/* <img
              src='/Image/common/development.png'
              width='80px'
              className='mx-auto'
            /> */}
            <span className="p-4 rounded icon-bg">
              <MdOutlineSecurity style={{ fontSize: "50px" }} />
            </span>
            <div className="card-body headingUnderline2">
              <h5 className="card-title mt-4 mb-5">Security</h5>
              <p className="card-text">
                We prioritize robust security measures in our software
                development, ensuring the protection of your valuable data and
                safeguarding against potential threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUsDiff;
