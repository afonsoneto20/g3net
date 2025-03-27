
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

/**
 * Componente que explica o processo de implementação da solução em condomínios
 * Mostra as etapas desde a visita técnica até a ativação
 */
const HowItWorksSection = () => {
  // Etapas do processo de implementação
  const steps = [
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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simplificado para levar internet de alta velocidade ao seu condomínio
          </p>
        </div>
        
        {/* Exibição das etapas do processo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Número da etapa */}
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              {/* Título da etapa */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              {/* Descrição da etapa */}
              <p className="text-gray-600">{step.description}</p>
              
              {/* Linha conectora entre etapas (visível apenas em desktop) */}
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
        
        {/* Modal de seleção de planos */}
        <div className="mt-4 text-center">
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
                {/* Opção de plano para casa */}
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
                {/* Opção de plano para apartamento */}
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
        
        {/* Botão para solicitar visita técnica */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            Solicitar visita técnica
            <CheckIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
