
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon, Home, Shield, Clock, Zap, Cable, Bolt } from 'lucide-react';
import { Link } from 'react-router-dom';

const Casa = () => {
  const installationSteps = [
    {
      number: "01",
      icon: <Home size={24} />,
      title: "Inspeção Técnica",
      description: "Nossa equipe realiza uma análise detalhada da sua residência para garantir a melhor instalação possível."
    },
    {
      number: "02",
      icon: <Shield size={24} />,
      title: "Projeto Personalizado",
      description: "Desenvolvemos um projeto sob medida para as características específicas da sua casa."
    },
    {
      number: "03",
      icon: <Clock size={24} />,
      title: "Instalação Profissional",
      description: "Equipe especializada faz a instalação com cabeamento Premium até 100x mais resistente que o convencional."
    }
  ];

  const plans = [
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
    },
    {
      title: "Ultra 8 Gbps",
      speed: "8 Gbps",
      price: "1500",
      features: [
        "Velocidade simétrica",
        "Download e upload de 8 Gbps",
        "Equipamento com portas SFP+",
        "Wi-Fi de alta performance",
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
                <Home size={14} className="mr-1" /> Internet para casas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Internet de Alta Velocidade para sua Casa</h1>
              <p className="text-xl text-gray-600 mb-8">
                Conexão simétrica e ultra rápida com tecnologia de ponta para sua residência.
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
                alt="Internet para Casas" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Cabling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img 
                src="/placeholder.svg" 
                alt="Cabeamento Premium" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <Cable size={14} className="mr-1" /> Tecnologia superior
              </div>
              <h2 className="text-3xl font-bold mb-6">Cabeamento até 100x mais resistente</h2>
              <p className="text-xl text-gray-600 mb-8">
                Na G3NET, utilizamos um cabeamento Premium que é até 100 vezes mais resistente que o utilizado por outras operadoras. Isso garante:
              </p>
              <ul className="space-y-4">
                {[
                  "Maior durabilidade em condições adversas",
                  "Resistência superior a intempéries",
                  "Menor taxa de falhas e interrupções",
                  "Estabilidade excepcional do sinal",
                  "Maior confiabilidade a longo prazo"
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
      
      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Processo de Instalação Simplificado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Da avaliação até a ativação, cuidamos de tudo para você começar a navegar rapidamente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block w-full h-1 border-t-2 border-dashed border-primary-200 my-8 relative">
                    <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <div className="highlight-chip mb-4">
              <Bolt size={14} className="mr-1" /> Máxima velocidade
            </div>
            <h2 className="text-3xl font-bold mb-4">Planos para Casas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Velocidades simétricas exclusivas para residências unifamiliares
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    asChild
                  >
                    <Link to={`/contratar/${encodeURIComponent(plan.title)}`}>
                      Contratar agora
                      <CheckIcon size={18} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Casa;
