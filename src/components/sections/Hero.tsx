import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Wifi, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blue-light opacity-60 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="highlight-chip mb-4">
              <Wifi size={14} className="mr-1" /> Internet de alta velocidade
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Internet rápida e <span className="text-primary-500">confiável</span> para você
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Navegue, trabalhe e se divirta com a melhor experiência de internet. Planos que cabem no seu bolso com máxima velocidade.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button 
                size="lg" 
                className="btn-hover gap-2"
              >
                Ver planos
                <ArrowRight />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-hover"
              >
                Verificar cobertura
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-primary-500 mr-2" />
                <span>Instalação rápida</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-primary-500 mr-2" />
                <span>Suporte 24h</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative z-10 bg-white rounded-2xl p-6 shadow-card animate-float">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3">
                <div className="bg-primary-500 text-white rounded-full py-1 px-3 text-sm font-medium">
                  <Zap size={14} className="inline mr-1" /> Ultra Rápido
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
                alt="Experiência online de alta velocidade"
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold">Fibra óptica de ponta a ponta</h3>
                <p className="text-gray-600 mt-2">
                  Tecnologia que garante estabilidade e velocidade máxima para todas as suas conexões.
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full animate-pulse-soft"></div>
            <div className="absolute top-1/2 -right-8 w-24 h-24 bg-primary-100 rounded-full animate-pulse-soft animate-delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
