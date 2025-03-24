
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BuildingIcon, Wifi, Users, LayoutGrid, Home, Lightbulb } from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BuildingIcon size={24} />,
      title: "Acesso nas áreas comuns",
      description: "Cobertura completa em áreas comuns do condomínio."
    },
    {
      icon: <Wifi size={24} />,
      title: "Tecnologia Mesh",
      description: "Cobertura Wi-Fi 6+ completa para grandes apartamentos com sinal estável em todos os ambientes."
    },
    {
      icon: <Users size={24} />,
      title: "Planos para cada perfil",
      description: "Opções flexíveis para atender às necessidades de cada morador com até 8 Gbps de velocidade."
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Projeto personalizado",
      description: "Solução sob medida para as características e necessidades específicas do seu condomínio."
    },
    {
      icon: <Home size={24} />,
      title: "Instalação sem obras",
      description: "Sistema instalado sem intervenções estruturais complexas."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Suporte prioritário",
      description: "Atendimento prioritário e personalizado para condomínios."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Vantagens para o seu condomínio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de conectividade que valorizam o seu empreendimento e melhoram a experiência dos moradores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((feature, index) => (
            <Card key={index} className="animate-fade-up border border-gray-100 shadow hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
