import React from "react"; 

import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects/>
      <Footer />
    </>
  );
};

export default Home;
