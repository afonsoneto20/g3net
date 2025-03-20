
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, Network, Globe, Server, ShieldCheck, Zap, Clock } from 'lucide-react';

const Provedores = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <Network size={14} className="mr-1" /> Para provedores de internet
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Soluções Wholesale para Provedores</h1>
              <p className="text-xl text-gray-600 mb-8">
                Infraestrutura de rede robusta, com alta capacidade de tráfego e disponibilidade para o seu provedor crescer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Fale com nosso time comercial
                  <CheckIcon size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  Conhecer soluções
                </Button>
              </div>
            </div>
            <div className="animate-fade-up order-first lg:order-last">
              <img 
                src="/placeholder.svg" 
                alt="Soluções para Provedores" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Nossas soluções para provedores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infraestrutura completa para o crescimento sustentável do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={24} />,
                title: "Trânsito IP",
                description: "Conexão direta à internet com alta disponibilidade e baixa latência."
              },
              {
                icon: <Server size={24} />,
                title: "Transporte",
                description: "Circuitos de dados dedicados entre pontos de presença."
              },
              {
                icon: <Network size={24} />,
                title: "Última Milha",
                description: "Infraestrutura para conectar seu cliente final com qualidade."
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Anti-DDoS",
                description: "Proteção avançada contra ataques de negação de serviço."
              },
              {
                icon: <Zap size={24} />,
                title: "Backbone Redundante",
                description: "Múltiplas rotas para garantir disponibilidade máxima."
              },
              {
                icon: <Clock size={24} />,
                title: "Suporte 24/7",
                description: "Time técnico especializado disponível a qualquer momento."
              }
            ].map((solution, index) => (
              <Card key={index} className="animate-fade-up border border-gray-100 shadow hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Offerings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Nossos diferenciais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por que escolher a G3NET como parceira do seu provedor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Infraestrutura robusta",
                description: "Backbone de alta capacidade com múltiplas rotas e redundância de caminho, garantindo disponibilidade superior a 99,9%.",
                features: [
                  "Conexões de 1Gbps a 100Gbps",
                  "Fibra óptica de ponta a ponta",
                  "Equipamentos de última geração",
                  "Monitoramento proativo 24/7"
                ]
              },
              {
                title: "Flexibilidade comercial",
                description: "Modelos de negócio adaptáveis às necessidades do seu provedor, com opções de contratação que acompanham seu crescimento.",
                features: [
                  "Planos escaláveis",
                  "Contratação sob demanda",
                  "Preços competitivos",
                  "Modelos de parceria personalizados"
                ]
              },
              {
                title: "Suporte técnico especializado",
                description: "Equipe técnica altamente qualificada e dedicada ao atendimento de provedores, com rápido tempo de resposta.",
                features: [
                  "NOC exclusivo para provedores",
                  "SLA diferenciado",
                  "Atendimento telefônico prioritário",
                  "Portal de autoatendimento"
                ]
              },
              {
                title: "Presença nacional",
                description: "Pontos de presença estrategicamente localizados em todo o território nacional, proporcionando baixa latência e alta disponibilidade.",
                features: [
                  "PTTs em diversas localidades",
                  "Conexão direta com os maiores datacenters",
                  "Interconexão com principais operadoras",
                  "Capilaridade em constante expansão"
                ]
              }
            ].map((offering, index) => (
              <Card key={index} className="animate-fade-up border border-gray-100 shadow hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="gap-2">
              Solicitar proposta comercial
              <CheckIcon size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para expandir seu provedor?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato com nosso time comercial e descubra como a G3NET pode ser a parceira ideal para o crescimento do seu negócio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Agendar demonstração
                <CheckIcon size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-500">
                Solicitar contato
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Provedores;
