/**
 * Página inicial do site
 * Agrupa todos os componentes principais da landing page
 * Inclui seções de hero, serviços, features, cobertura e contato 
 */
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Coverage from '../components/sections/Coverage';
import Contact from '../components/sections/Contact';

/**
 * Página inicial do site
 * Reúne todos os componentes principais da página inicial
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Barra de navegação */}
      <Navbar />
      
      {/* Seção principal (hero) */}
      <Hero />
      
      {/* Seção de serviços */}
      <Services />
      
      {/* Seção de recursos/características */}
      <Features />
      
      {/* Seção de cobertura */}
      <Coverage />
      
      {/* Seção de contato */}
      <Contact />
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Index;
