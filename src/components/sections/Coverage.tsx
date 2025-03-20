
import React, { useState } from 'react';
import Button from '../ui/Button';
import { MapPin, Search, Check, X } from 'lucide-react';

const Coverage = () => {
  const [cep, setCep] = useState('');
  const [coverageResult, setCoverageResult] = useState<'available' | 'unavailable' | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate coverage check - in a real app, this would call an API
    if (cep.startsWith('0') || cep.startsWith('1')) {
      setCoverageResult('available');
    } else {
      setCoverageResult('unavailable');
    }
  };
  
  return (
    <section id="coverage" className="section bg-gradient-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="highlight-chip bg-white/20 text-white mb-4">
              <MapPin size={14} className="mr-1" /> Área de cobertura
            </div>
            <h2 className="mb-6 text-white">Verifique se a G3NET está disponível na sua região</h2>
            <p className="text-xl text-blue-100 mb-8">
              Estamos em constante expansão para levar internet de qualidade para mais cidades. Confira se já atendemos seu endereço.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Digite seu CEP"
                    className="w-full py-3 px-4 pr-10 rounded-lg text-gray-800 bg-white/90 backdrop-blur-sm border border-blue-300/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
                <Button 
                  type="submit" 
                  className="bg-white text-primary-600 hover:bg-white/90"
                  icon={<Search size={18} />}
                >
                  Verificar
                </Button>
              </div>
            </form>
            
            {coverageResult === 'available' && (
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-300/30 rounded-lg p-4 animate-fade-in">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Boa notícia!</h3>
                    <p className="text-blue-100">A G3NET está disponível no seu endereço. Entre em contato conosco para contratar.</p>
                  </div>
                </div>
              </div>
            )}
            
            {coverageResult === 'unavailable' && (
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-lg p-4 animate-fade-in">
                <div className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <X size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Que pena!</h3>
                    <p className="text-blue-100">Ainda não atendemos seu endereço, mas estamos em constante expansão. Cadastre-se para ser avisado quando chegarmos na sua região.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800"
                alt="Cobertura G3NET"
                className="w-full h-auto rounded-lg object-cover shadow"
              />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-xl mb-2">+30</h4>
                  <p className="text-blue-100">Cidades atendidas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-xl mb-2">+100k</h4>
                  <p className="text-blue-100">Clientes conectados</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-xl mb-2">99.8%</h4>
                  <p className="text-blue-100">Uptime garantido</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-xl mb-2">24/7</h4>
                  <p className="text-blue-100">Suporte técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
