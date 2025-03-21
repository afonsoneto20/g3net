
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CheckIcon, Network, Globe, Server, ShieldCheck, Zap, Clock, Cable } from 'lucide-react';

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
                icon: <Cable size={24} />,
                title: "Fibra Apagada",
                description: "Pares de fibra óptica para conexões ponto a ponto de alta capacidade."
              },
              {
                icon: <Clock size={24} />,
                title: "Suporte personalizado",
                description: "Time técnico especializado disponível para atendimento prioritário."
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
                  <div className="mt-4">
                    <Link to="/contratar">
                      <Button variant="outline" size="sm" className="w-full">
                        Contratar
                      </Button>
                    </Link>
                  </div>
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
                title: "Presença internacional",
                description: "Pontos de presença estrategicamente localizados em diversos países, proporcionando baixa latência e alta disponibilidade.",
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
        </div>
      </section>
      
      {/* Request Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Solicite um orçamento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo para receber uma proposta personalizada para o seu provedor
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-up">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Nome do provedor</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Nome do responsável</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">E-mail</label>
                      <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Telefone</label>
                      <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">CEP</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Endereço</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Número</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">Complemento</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Bairro</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">Cidade/UF</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Serviço de interesse</label>
                      <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Trânsito IP</option>
                        <option>Transporte</option>
                        <option>Última Milha</option>
                        <option>Fibra Apagada</option>
                        <option>Outro serviço</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Capacidade necessária</label>
                      <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Até 1 Gbps</option>
                        <option>1 Gbps - 10 Gbps</option>
                        <option>10 Gbps - 40 Gbps</option>
                        <option>40 Gbps - 100 Gbps</option>
                        <option>Acima de 100 Gbps</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Detalhes adicionais</label>
                      <textarea className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" rows={4}></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full gap-2"
                    >
                      Solicitar orçamento
                      <CheckIcon size={18} />
                    </Button>
                  </form>
                </div>
              </div>
              
              <div className="animate-fade-up">
                <h3 className="text-2xl font-bold mb-4">Por que solicitar um orçamento?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Preços especiais para provedores de internet",
                    "Soluções personalizadas com base nas suas necessidades",
                    "Atendimento prioritário por um consultor especializado",
                    "Condições comerciais flexíveis e competitivas",
                    "Suporte técnico dedicado para seu provedor",
                    "Alta confiabilidade e desempenho de rede",
                    "Parcerias de longo prazo com crescimento conjunto"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <CheckIcon size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-primary-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mr-4">
                      <Network size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Somos um provedor de provedores</h4>
                      <p className="text-gray-600">Especialistas em soluções wholesale</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Nossa infraestrutura de rede foi projetada para atender às demandas específicas de provedores de internet, 
                    oferecendo alta capacidade, baixa latência e disponibilidade superior.
                  </p>
                </div>
              </div>
            </div>
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
              <Link to="/contratar">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-500">
                  Solicitar orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Provedores;
