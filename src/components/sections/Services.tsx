
import React from 'react';
import PlanCard from '../ui/PlanCard';
import { Wifi, WifiOff, Zap } from 'lucide-react';

const Services = () => {
  const plans = [
    {
      title: "Plano Básico",
      speed: "200 Mbps",
      price: "79,90",
      features: [
        "Download até 200 Mbps",
        "Upload até 100 Mbps",
        "Wi-Fi de alta performance",
        "Instalação gratuita",
        "Suporte técnico 24h"
      ],
      popular: false
    },
    {
      title: "Plano Premium",
      speed: "500 Mbps",
      price: "109,90",
      features: [
        "Download até 500 Mbps",
        "Upload até 250 Mbps",
        "Wi-Fi de alta performance",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "IP Fixo opcional"
      ],
      popular: true
    },
    {
      title: "Plano Ultra",
      speed: "1 Gbps",
      price: "159,90",
      features: [
        "Download até 1 Gbps",
        "Upload até 500 Mbps",
        "Wi-Fi de alta performance",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "IP Fixo opcional",
        "Prioridade no atendimento"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="highlight-chip mb-4">
            <Zap size={14} className="mr-1" /> Planos para todos os perfis
          </div>
          <h2 className="mb-4">Escolha o melhor plano para você</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Internet de fibra óptica com velocidade e estabilidade para sua casa ou negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PlanCard
                title={plan.title}
                speed={plan.speed}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
