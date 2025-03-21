
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Wifi, WifiOff, Zap, CheckIcon, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const apartmentPlans = [
    {
      title: "Ultra 600 Mbps",
      speed: "600 Mbps",
      price: "79,90",
      features: [
        "Download até 600 Mbps",
        "Upload até 300 Mbps",
        "Wi-Fi de alta performance",
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
        "Wi-Fi de alta performance",
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

  const housePlans = [
    {
      title: "Ultra 1 Gbps",
      speed: "1 Gbps",
      price: "250",
      features: [
        "Velocidade simétrica",
        "Download e upload de 1 Gbps",
        "Equipamento com portas 1GE",
        "Wi-Fi de alta performance",
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
        "Wi-Fi de alta performance",
        "Suporte personalizado",
        "Instalação gratuita"
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
          
          <TabsContent value="apartamento">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apartmentPlans.map((plan, index) => (
                <Card key={index} className={`animate-fade-up border ${plan.popular ? 'border-primary-500 shadow-lg' : 'border-gray-100 shadow'} h-full flex flex-col`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                    <div className="mt-1 text-primary-500 font-bold text-3xl">{plan.speed}</div>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <div className="bg-primary-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                          Mais popular
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="text-sm text-gray-500">Mensalidade</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-gray-900">R$</span>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 mb-1">/mês</span>
                      </div>
                    </div>
                    
                    <ul className="mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-3">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/residencial/apartamento" className="mt-auto">
                      <Button 
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full gap-2"
                      >
                        Contratar agora
                        <CheckIcon size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="casa">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {housePlans.map((plan, index) => (
                <Card key={index} className={`animate-fade-up border ${plan.popular ? 'border-primary-500 shadow-lg' : 'border-gray-100 shadow'} h-full flex flex-col`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                    <div className="mt-1 text-primary-500 font-bold text-3xl">{plan.speed}</div>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <div className="bg-primary-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                          Mais popular
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="text-sm text-gray-500">Mensalidade</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-gray-900">R$</span>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 mb-1">/mês</span>
                      </div>
                    </div>
                    
                    <ul className="mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-3">
                          <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/residencial/casa" className="mt-auto">
                      <Button 
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full gap-2"
                      >
                        Contratar agora
                        <CheckIcon size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
