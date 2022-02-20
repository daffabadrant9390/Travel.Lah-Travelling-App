import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommendations from "./components/Recommendations";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

const App = () => {
  // Animation block
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "40px",
      duration: 3000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommendations,
        #testimonials
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  });

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommendations />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
