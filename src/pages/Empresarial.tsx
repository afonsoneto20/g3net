
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, BuildingIcon, Globe, Server, ShieldCheck, Wifi, Zap, Network, Route, User } from 'lucide-react';

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
                icon: <Network size={24} />,
                title: "Transporte L2 / VPN",
                description: "Soluções de conectividade privada entre suas unidades com alta segurança."
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
                icon: <Zap size={24} />,
                title: "Alta Velocidade",
                description: "Soluções que chegam até 100 Gbps com redundância de rede e alta confiabilidade de rotas."
              },
              {
                icon: <User size={24} />,
                title: "Suporte Prioritário",
                description: "Atendimento exclusivo com gerente de contas G3 ELITE para clientes empresariais."
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
            <h2 className="text-3xl font-bold mb-4">Planos Banda Larga Empresarial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internet banda larga de alta velocidade com IP Fixo para sua empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Business 500 Mbps",
                price: "250",
                speed: "500 Mbps",
                features: [
                  "Velocidade simétrica",
                  "IP fixo",
                  "Upload de 500 Mbps",
                  "Suporte prioritário",
                  "SLA de 99,5%",
                  "Instalação em até 7 dias"
                ]
              },
              {
                title: "Business 1 Gbps",
                price: "450",
                speed: "1 Gbps",
                features: [
                  "Velocidade simétrica",
                  "IP fixo",
                  "Upload de 1 Gbps",
                  "Suporte prioritário",
                  "SLA de 99,7%",
                  "Instalação em até 5 dias",
                  "Monitoramento 24/7"
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
      
      {/* Link Dedicado Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Link Dedicado Empresarial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas para empresas que necessitam de alta disponibilidade e performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-up">
                <h3 className="text-2xl font-bold mb-4">Solicite seu Link Dedicado</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Entre em contato com nosso gerente de contas G3 ELITE para um orçamento personalizado para sua empresa.
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Nome da empresa</label>
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
                      <label className="block text-gray-700 mb-2">Serviço de interesse</label>
                      <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Link Dedicado</option>
                        <option>Transporte L2 / VPN</option>
                        <option>Anti-DDoS</option>
                        <option>Outro serviço</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Velocidade desejada</label>
                      <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Até 100 Mbps</option>
                        <option>100 Mbps - 500 Mbps</option>
                        <option>500 Mbps - 1 Gbps</option>
                        <option>1 Gbps - 10 Gbps</option>
                        <option>10 Gbps - 100 Gbps</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Quantidade de IPs necessários</label>
                      <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Bloco /30 (2 IPs úteis)</option>
                        <option>Bloco /29 (6 IPs úteis)</option>
                        <option>Bloco /28 (14 IPs úteis)</option>
                        <option>Bloco /27 (30 IPs úteis)</option>
                        <option>Mais de 30 IPs</option>
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
                <h3 className="text-2xl font-bold mb-4">Vantagens do Link Dedicado G3NET</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Banda garantida e dedicada exclusivamente para sua empresa",
                    "Velocidades de até 100 Gbps com alta estabilidade",
                    "SLAs rigorosos com disponibilidade superior a 99,8%",
                    "Suporte técnico especializado com gerente de contas exclusivo",
                    "Múltiplas rotas redundantes para máxima confiabilidade",
                    "Blocos de IPs fixos para aplicações profissionais",
                    "Monitoramento proativo 24/7 da sua conexão",
                    "Baixa latência para aplicações em tempo real"
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
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Gerente de Contas G3 ELITE</h4>
                      <p className="text-gray-600">Atendimento exclusivo para empresas</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Todo cliente corporativo conta com um gerente de contas G3 ELITE dedicado, 
                    garantindo atendimento personalizado e resolução rápida para todas as demandas.
                  </p>
                  <Button variant="outline" className="w-full gap-2">
                    Saiba mais sobre o programa G3 ELITE
                    <CheckIcon size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Empresarial;
