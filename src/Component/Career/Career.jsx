import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Copy from '../Copy/Copy';
import icon from "../../Image/common/contactIcon.svg";

const Career = () => {
    return (
        <div className="">
            <Header />
            <div className='careenSection'>
                <div className='careerHero'>
                    <h1 className='text'>Join us. You won't regret it.</h1>
                </div>
                <div className='container careerWraper'>
                    <h2 className="text-center svg-container">Why you should consider applying:</h2>

                    <p className='text-center mt-5'>
                        We're lively, not corporate. We have the energy and boldness of a startup and the expertise and pragmatism of a scale-up. All in one place.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                        <div className="col aboutText">
                            <div>
                                <ul className="aboutusList">
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>Personal and professional growth.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>Employee wellbeing.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>An open feedback culture.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col aboutText">
                            <div>
                                <ul className="aboutusList">
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>A fast-paced tech environment.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>A hybrid working model.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>Competitive salary.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col aboutText">
                            <div>
                                <ul className="aboutusList">
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>Interesting compensation and benefits.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>Personal tooling & training budget.</p>
                                    </li>
                                    <li>
                                        <img src={icon} alt="" />
                                        <p>2 in-house chefs.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-5">
                        <div class="card-header text-center">
                           <h4>Join Us</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text">No Openings Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copy />
        </div>
    );
};

export default Career;