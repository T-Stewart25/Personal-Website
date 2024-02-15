import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const navbarRef = useRef(null);
  const [contentMarginTop, setContentMarginTop] = useState(0);

  useEffect(() => {
    const calculateContentMarginTop = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      setContentMarginTop(navbarHeight);
    };

    calculateContentMarginTop();
    window.addEventListener("resize", calculateContentMarginTop);

    return () => {
      window.removeEventListener("resize", calculateContentMarginTop);
    };
  }, []);

  return (
    <BrowserRouter>
      <div style={{ zIndex: 999 }} className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center block">
          <Navbar ref={navbarRef} />
          <Hero />
        </div>
      </div>
      <div style={{ marginTop: `${contentMarginTop}px`, zIndex:0 } }>
        <div>
          <About />
          {/*<Experience />*/}
          <Tech />
          {/*<Works />*/}
          {/*<Feedbacks />*/}
        </div>
        <div className="relative z-0">
          <Contact />
          {/*<StarsCanvas />*/}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
