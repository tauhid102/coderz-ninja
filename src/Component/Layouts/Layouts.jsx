import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import About from '../About/About';
import OurSkill from '../OurSkill/OurSkill';
import SlickTestimonial from '../SlickTestimonial/SlickTestimonial';
import MakeUsDiff from '../MakeUsDiff/MakeUsDiff';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Copy from '../Copy/Copy';

const Layouts = () => {
    return (
        <>
        <div className="background-image">
          <Header />
          <Hero />
        </div>
        <Service />
        <About />
        <OurSkill />
        <SlickTestimonial/>
        <MakeUsDiff />
        <Contact />
        <Footer />
        <Copy />
      </>
    );
};

export default Layouts;