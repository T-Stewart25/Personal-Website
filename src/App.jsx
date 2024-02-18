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
  Resume,
  StarsCanvas,
  Table,
  Work,
  Gallery
} from "./components";

const App = () => {
  const navbarRef = useRef(null);
  const [contentMarginTop, setContentMarginTop] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(
    window.innerWidth <= 900 // Set the breakpoint based on your needs
  );

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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768); // Update the breakpoint based on your needs
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      <div style={{ marginTop: `${contentMarginTop}px`, zIndex: 0 }}>
        <div>
          <About />
          <Tech />
          {!isSmallDevice && <Gallery />}
          {!isSmallDevice && <Table />}
          {!isSmallDevice && <Work />}
          <Resume />
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
