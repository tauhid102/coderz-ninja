import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import About from "./Component/About/About";
import MakeUsDiff from "./Component/MakeUsDiff/MakeUsDiff";
import Contact from "./Component/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background-image">
        <Header />
        <Hero />
      </div>
      <Service/>
      <About/>
      <MakeUsDiff/>
      <Contact/>
    </>
  );
}

export default App;
