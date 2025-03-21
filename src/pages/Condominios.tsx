import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';
import { BuildingIcon, CheckIcon, Home, Lightbulb, Wifi, Users, ShieldCheck, LayoutGrid } from 'lucide-react';

const Condominios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="highlight-chip mb-4">
                <BuildingIcon size={14} className="mr-1" /> Soluções para condomínios
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Internet para Condomínios</h1>
              <p className="text-xl text-gray-600 mb-8">
                Conectividade de alta qualidade para todos os moradores, com soluções personalizadas para cada condomínio.
              </p>
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
                alt="Internet para Condomínios" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Vantagens para o seu condomínio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas de conectividade que valorizam o seu empreendimento e melhoram a experiência dos moradores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BuildingIcon size={24} />,
                title: "Acesso nas áreas comuns",
                description: "Cobertura completa em áreas comuns do condomínio."
              },
              {
                icon: <Wifi size={24} />,
                title: "Tecnologia Mesh",
                description: "Cobertura Wi-Fi completa para grandes apartamentos com sinal estável em todos os ambientes."
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
      
      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simplificado para levar internet de alta velocidade ao seu condomínio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Visita Técnica",
                description: "Nossa equipe realiza uma vistoria completa para avaliar a infraestrutura do condomínio."
              },
              {
                number: "02",
                title: "Projeto Personalizado",
                description: "Desenvolvemos um projeto sob medida de acordo com as características do seu condomínio."
              },
              {
                number: "03",
                title: "Implantação",
                description: "Instalação rápida e organizada, com mínimo impacto para os moradores."
              },
              {
                number: "04",
                title: "Ativação",
                description: "Cada morador escolhe seu plano e tem sua conexão ativada individualmente."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block w-full h-1 border-t-2 border-dashed border-primary-200 my-8 relative">
                    <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  Ver planos
                  <CheckIcon size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Escolha o tipo de plano</DialogTitle>
                  <DialogDescription>
                    Selecione o tipo de residência para ver os planos disponíveis
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <Card className="cursor-pointer hover:border-primary transition-all">
                    <Link to="/residencial/casa">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Casa</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Planos especiais para casas com velocidades simétricas</CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                  <Card className="cursor-pointer hover:border-primary transition-all">
                    <Link to="/residencial/apartamento">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Apartamento</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Planos otimizados para apartamentos em condomínios</CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      {/* Admin Area Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Planos para Áreas Comuns e Administrativas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Banda larga de alta velocidade para espaços comuns e administração do seu condomínio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Condomínio 600 Mbps",
                price: "199,90",
                speed: "600 Mbps",
                features: [
                  "Velocidade simétrica",
                  "Upload de 600 Mbps",
                  "Suporte prioritário",
                  "Ideal para portarias e áreas administrativas",
                  "Wi-Fi para áreas comuns"
                ]
              },
              {
                title: "Condomínio 1 Gbps",
                price: "299,90",
                speed: "1 Gbps",
                features: [
                  "Velocidade simétrica",
                  "Upload de 1 Gbps",
                  "Suporte prioritário",
                  "Monitoramento 24/7",
                  "Wi-Fi para áreas comuns",
                  "Ideal para áreas de lazer"
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
                  
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500 mb-4">
                      Pontos adicionais disponíveis por R$ 50,00/mês cada.
                    </p>
                    <Button 
                      variant={index === 1 ? "default" : "outline"}
                      className="w-full gap-2"
                    >
                      Solicitar orçamento
                      <CheckIcon size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="gap-2">
              Solicitar orçamento personalizado
              <CheckIcon size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Condomínios que já contam com nossa solução de internet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "A G3NET transformou a conectividade do nosso condomínio. Os moradores estão muito satisfeitos com a velocidade e estabilidade.",
                author: "Carlos Mendes",
                role: "Síndico do Residencial Parque Verde"
              },
              {
                quote: "Processo de instalação extremamente organizado e profissional. O suporte técnico é rápido e eficiente quando precisamos.",
                author: "Mariana Silva",
                role: "Administradora do Condomínio Alta Vista"
              },
              {
                quote: "Nosso condomínio ganhou mais valor no mercado após a instalação da rede de fibra ótica da G3NET. Recomendo a todos.",
                author: "Roberto Almeida",
                role: "Síndico do Edifício Costa Azul"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-fade-up border border-gray-100 shadow hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary-500">
                    <svg width="45" height="36" className="fill-current">
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                  </div>
                  <p className="italic text-gray-600 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
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

export default Condominios;
