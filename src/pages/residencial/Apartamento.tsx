
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon, Building, Wifi, Clock, Zap, ShieldCheck, HomeIcon, Users } from 'lucide-react';

const Apartamento = () => {
  const plans = [
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
        "Instalação gratuita",
        "Prioridade no atendimento"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <Building size={14} className="mr-1" /> Internet para apartamentos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Internet de Alta Velocidade para seu Apartamento</h1>
              <p className="text-xl text-gray-600 mb-8">
                Conexão estável e veloz, com planos especiais para apartamentos e cobertura Wi-Fi em todos os cômodos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Verificar disponibilidade
                  <CheckIcon size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  Ver planos
                </Button>
              </div>
            </div>
            <div className="animate-fade-up order-first lg:order-last">
              <img 
                src="/placeholder.svg" 
                alt="Internet para Apartamentos" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mesh Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img 
                src="/placeholder.svg" 
                alt="Tecnologia Mesh" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <Wifi size={14} className="mr-1" /> Tecnologia avançada
              </div>
              <h2 className="text-3xl font-bold mb-6">Tecnologia Mesh para Cobertura Total</h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa tecnologia Mesh garante cobertura Wi-Fi em todos os ambientes do seu apartamento, mesmo nos maiores:
              </p>
              <ul className="space-y-4">
                {[
                  "Sinal forte e estável em todos os cômodos",
                  "Transição automática entre pontos de acesso sem quedas",
                  "Wi-Fi de alta velocidade em toda a área do apartamento",
                  "Ideal para apartamentos grandes e coberturas",
                  "Expansível conforme sua necessidade"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckIcon size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <div className="highlight-chip mb-4">
              <Zap size={14} className="mr-1" /> Velocidade garantida
            </div>
            <h2 className="text-3xl font-bold mb-4">Planos para Apartamentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internet rápida e estável, com planos especiais para apartamentos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
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
                  
                  <Button 
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full gap-2 mt-auto"
                  >
                    Contratar agora
                    <CheckIcon size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Condo Manager Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <Building size={14} className="mr-1" /> Para síndicos e administradores
              </div>
              <h2 className="text-3xl font-bold mb-6">Leve a G3NET para o seu condomínio</h2>
              <p className="text-xl text-gray-600 mb-8">
                Você é síndico ou administrador e deseja trazer internet de qualidade para todo o condomínio? A G3NET tem soluções completas:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Projeto personalizado para as necessidades do seu condomínio",
                  "Valorização do imóvel com internet de alta velocidade",
                  "Instalação sem obras complexas e com mínimo impacto",
                  "Suporte prioritário para condomínios",
                  "Planos especiais para áreas comuns e administrativas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckIcon size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
            <div className="animate-fade-up order-first lg:order-last">
              <img 
                src="/placeholder.svg" 
                alt="G3NET para condomínios" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Apartamento;
