
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Coverage from '../components/sections/Coverage';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
