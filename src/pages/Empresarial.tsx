
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, BuildingIcon, Globe, Server, ShieldCheck, Wifi } from 'lucide-react';

const Empresarial = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <BuildingIcon size={14} className="mr-1" /> Soluções para empresas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Internet Empresarial de Alta Performance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Conexão estável e veloz para impulsionar o seu negócio, com suporte técnico dedicado e SLA garantido.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Solicitar orçamento
                  <CheckIcon size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  Fale com um consultor
                </Button>
              </div>
            </div>
            <div className="animate-fade-up order-first lg:order-last">
              <img 
                src="/placeholder.svg" 
                alt="Internet Empresarial" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a G3NET para sua empresa?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas para atender às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi size={24} />,
                title: "Link Dedicado",
                description: "Conexão exclusiva e garantida para sua empresa, sem compartilhamento de banda."
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "SLA Garantido",
                description: "Acordo de nível de serviço que garante disponibilidade superior a 99,8%."
              },
              {
                icon: <Server size={24} />,
                title: "IP Fixo",
                description: "Endereço IP fixo para acesso remoto e hospedagem de serviços."
              },
              {
                icon: <Globe size={24} />,
                title: "Monitoramento 24/7",
                description: "Monitoramento constante da sua rede para garantir performance ideal."
              },
              {
                icon: <BuildingIcon size={24} />,
                title: "Projetos Customizados",
                description: "Soluções sob medida para qualquer porte de empresa ou necessidade."
              },
              {
                icon: <CheckIcon size={24} />,
                title: "Suporte Prioritário",
                description: "Atendimento exclusivo e prioritário para clientes empresariais."
              }
            ].map((feature, index) => (
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
      
      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Planos Empresariais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano que melhor atende às necessidades da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Start",
                price: "299,90",
                speed: "500 Mbps",
                features: [
                  "Link dedicado",
                  "Upload de 250 Mbps",
                  "5 IPs fixos",
                  "Suporte prioritário",
                  "SLA de 99,5%",
                  "Instalação em até 7 dias"
                ]
              },
              {
                title: "Business Pro",
                price: "499,90",
                speed: "1 Gbps",
                features: [
                  "Link dedicado",
                  "Upload de 500 Mbps",
                  "10 IPs fixos",
                  "Suporte prioritário",
                  "SLA de 99,7%",
                  "Instalação em até 5 dias",
                  "Monitoramento 24/7"
                ]
              },
              {
                title: "Business Enterprise",
                price: "899,90",
                speed: "2 Gbps",
                features: [
                  "Link dedicado",
                  "Upload de 1 Gbps",
                  "Bloco /29 de IPs fixos",
                  "Suporte VIP",
                  "SLA de 99,9%",
                  "Instalação em até 3 dias",
                  "Monitoramento 24/7",
                  "Redundância de link"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`animate-fade-up border ${index === 1 ? 'border-primary-500 shadow-lg' : 'border-gray-100 shadow'} h-full flex flex-col`}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                  <div className="mt-1 text-primary-500 font-bold text-3xl">{plan.speed}</div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500">A partir de</div>
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
                    variant={index === 1 ? "default" : "outline"}
                    className="w-full gap-2 mt-auto"
                  >
                    Solicitar orçamento
                    <CheckIcon size={18} />
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

export default Empresarial;
