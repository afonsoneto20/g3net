
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Wifi, WifiOff, Zap, CheckIcon, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlanCard from '../ui/PlanCard';

/**
 * Componente que exibe os planos de serviço disponíveis
 * Permite ao usuário navegar entre diferentes categorias de planos
 */
const Services = () => {
  // Planos para apartamentos
  const apartmentPlans = [
    {
      title: "Ultra 600 Mbps",
      speed: "600 Mbps",
      price: "79,90",
      features: [
        "Download até 600 Mbps",
        "Upload até 300 Mbps",
        "Wi-Fi 6+ de alta performance",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: false
    },
    {
      title: "Ultra 1 Gbps",
      speed: "1 Gbps",
      price: "119,90",
      features: [
        "Download até 1 Gbps",
        "Upload até 500 Mbps",
        "Wi-Fi 6+ de alta performance",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: true
    },
    {
      title: "Ultra 1.5 Gbps",
      speed: "1.5 Gbps",
      price: "249,90",
      features: [
        "Download até 1.5 Gbps",
        "Upload até 750 Mbps",
        "Equipamento com porta 2.5GE",
        "Wi-Fi 7",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: false
    }
  ];

  // Planos para casas
  const housePlans = [
    {
      title: "Ultra 1 Gbps",
      speed: "1 Gbps",
      price: "250",
      features: [
        "Velocidade simétrica",
        "Download e upload de 1 Gbps",
        "Equipamento com portas 1GE",
        "Wi-Fi 6+ de alta performance",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: false
    },
    {
      title: "Ultra 2 Gbps",
      speed: "2 Gbps",
      price: "450",
      features: [
        "Velocidade simétrica",
        "Download e upload de 2 Gbps",
        "Equipamento com portas 2.5GE",
        "Wi-Fi 7 incluso",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: true
    },
    {
      title: "Ultra 4 Gbps",
      speed: "4 Gbps",
      price: "800",
      features: [
        "Velocidade simétrica",
        "Download e upload de 4 Gbps",
        "Equipamento com portas SFP+",
        "Wi-Fi 6+ de alta performance",
        "Suporte personalizado",
        "Instalação gratuita"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="highlight-chip mb-4">
            <Zap size={14} className="mr-1" /> Planos para todos os perfis
          </div>
          <h2 className="mb-4">Escolha o melhor plano para você</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Internet de fibra óptica com velocidade e estabilidade para sua casa ou negócio.
          </p>
        </div>
        
        {/* Abas para seleção do tipo de residência */}
        <Tabs defaultValue="apartamento" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="apartamento" className="flex items-center gap-2">
                <Building size={16} />
                Apartamento
              </TabsTrigger>
              <TabsTrigger value="casa" className="flex items-center gap-2">
                <Home size={16} />
                Casa
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Conteúdo da aba de apartamentos */}
          <TabsContent value="apartamento">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apartmentPlans.map((plan, index) => (
                <PlanCard
                  key={index}
                  title={plan.title}
                  speed={plan.speed}
                  price={plan.price}
                  features={plan.features}
                  popular={plan.popular}
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Conteúdo da aba de casas */}
          <TabsContent value="casa">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {housePlans.map((plan, index) => (
                <PlanCard
                  key={index}
                  title={plan.title}
                  speed={plan.speed}
                  price={plan.price}
                  features={plan.features}
                  popular={plan.popular}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
