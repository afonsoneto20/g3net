
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Shield, Clock, Zap, Headphones, WifiOff, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Conexão segura",
      description: "Sua navegação sempre protegida com as melhores tecnologias de segurança digital.",
      icon: <Shield size={24} />
    },
    {
      title: "Suporte 24/7",
      description: "Equipe técnica disponível 24 horas por dia, 7 dias por semana para te ajudar.",
      icon: <Headphones size={24} />
    },
    {
      title: "Ultra velocidade",
      description: "Fibra óptica de ponta a ponta garantindo alta velocidade e baixa latência.",
      icon: <Zap size={24} />
    },
    {
      title: "Instalação rápida",
      description: "Instalação ágil e profissional em até 48 horas após a contratação.",
      icon: <Clock size={24} />
    },
    {
      title: "Sem quedas",
      description: "Rede redundante que garante a maior estabilidade e continuidade do mercado.",
      icon: <WifiOff size={24} />
    },
    {
      title: "Qualidade premium",
      description: "Equipamentos de última geração para a melhor experiência de internet.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="highlight-chip mb-4">
            <Award size={14} className="mr-1" /> Vantagens G3NET
          </div>
          <h2 className="mb-4">Por que escolher a G3NET?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos mais do que internet, entregamos uma experiência completa de conectividade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
