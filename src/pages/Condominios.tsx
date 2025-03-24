
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/condominios/HeroSection';
import BenefitsSection from '../components/sections/condominios/BenefitsSection';
import HowItWorksSection from '../components/sections/condominios/HowItWorksSection';
import AdminPlansSection from '../components/sections/condominios/AdminPlansSection';
import TestimonialsSection from '../components/sections/condominios/TestimonialsSection';

const Condominios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AdminPlansSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Condominios;
