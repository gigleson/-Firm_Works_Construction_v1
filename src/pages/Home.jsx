import React from "react"; 

import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default Home;
