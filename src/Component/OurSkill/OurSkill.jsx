import React from "react";
import icon1 from "../../Image/skill/html.png";
import icon2 from "../../Image/skill/css.png";
import icon3 from "../../Image/skill/nodejs.png";
import icon4 from "../../Image/skill/reactjs.png";
import icon5 from "../../Image/skill/redux.png";
import icon6 from "../../Image/skill/tailwind.png";
import icon7 from "../../Image/skill/mongodb.png";
import icon8 from "../../Image/skill/figma.png";
const OurSkill = () => {
  return (
    <div className="">
      <div className="container paddingTopBottom headingUnderline">
        <h2 className="text-center">Our Skill</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-4 text-center">
          <div className="col">
            <img width='50%' className="iconBackground"  src={icon1} alt="html" />
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon2} alt="html" />
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon3} alt="html" />
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon4} alt="html" />
          </div>
          <div className="col">
            <img width='50%'className="iconBackground" src={icon5} alt="html" />
          </div>
          <div className="col displayNone">
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon6} alt="html" />
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon7} alt="html" />
          </div>
          <div className="col">
            <img width='50%' className="iconBackground" src={icon8} alt="html" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkill;
