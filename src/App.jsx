import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import About from "./Component/About/About";
import MakeUsDiff from "./Component/MakeUsDiff/MakeUsDiff";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Copy from "./Component/Copy/Copy";
import OurSkill from "./Component/OurSkill/OurSkill";
import TestHeader from "./Component/Header/TestHeader";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <TestHeader/> */}
      <div className="background-image">
        <Header />
        <Hero />
      </div>
      <Service />
      <About />
      <OurSkill />
      <Testimonial />
      <MakeUsDiff />
      <Contact />
      <Footer />
      <Copy />
    </>
  );
}

export default App;
