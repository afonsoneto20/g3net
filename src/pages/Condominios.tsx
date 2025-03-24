
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/condominios/HeroSection';
import BenefitsSection from '../components/sections/condominios/BenefitsSection';
import HowItWorksSection from '../components/sections/condominios/HowItWorksSection';
import AdminPlansSection from '../components/sections/condominios/AdminPlansSection';
import TestimonialsSection from '../components/sections/condominios/TestimonialsSection';

/**
 * Página principal de Condomínios
 * Reúne todas as seções específicas para a oferta de serviços para condomínios
 */
const Condominios = () => {
  return (
    <div className="min-h-screen">
      {/* Barra de navegação */}
      <Navbar />
      
      {/* Seção principal (hero) */}
      <HeroSection />
      
      {/* Seção de benefícios */}
      <BenefitsSection />
      
      {/* Seção de como funciona */}
      <HowItWorksSection />
      
      {/* Seção de planos para administradores */}
      <AdminPlansSection />
      
      {/* Seção de depoimentos */}
      <TestimonialsSection />
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Condominios;
