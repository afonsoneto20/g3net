
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon, BuildingIcon } from 'lucide-react';

/**
 * Componente de seção hero para a página de condomínios
 * Exibe o banner principal com chamada para ação
 */
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            {/* Chip de destaque */}
            <div className="highlight-chip mb-4">
              <BuildingIcon size={14} className="mr-1" /> Soluções para condomínios
            </div>
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Internet para Condomínios</h1>
            {/* Descrição da seção */}
            <p className="text-xl text-gray-600 mb-8">
              Conectividade de alta qualidade para todos os moradores, com soluções personalizadas para cada condomínio.
            </p>
            {/* Botões de ação */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Solicitar visita técnica
                <CheckIcon size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Saiba mais
              </Button>
            </div>
          </div>
          {/* Imagem ilustrativa */}
          <div className="animate-fade-up order-first lg:order-last">
            <img 
              src="/placeholder.svg" 
              alt="Internet para Condomínios" 
              className="w-full h-auto rounded-xl shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
