
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Componente que apresenta os planos para áreas administrativas de condomínios
 * Exibe cards com os planos disponíveis para áreas comuns e administração
 */
const AdminPlansSection = () => {
  // Lista de planos disponíveis para áreas comuns e administração
  const plans = [
    {
      title: "Condomínio 600 Mbps",
      price: "199,90",
      speed: "600 Mbps",
      features: [
        "Velocidade simétrica",
        "Upload de 600 Mbps",
        "Suporte prioritário",
        "Ideal para portarias e áreas administrativas",
        "Wi-Fi 6+ para áreas comuns"
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
        "Wi-Fi 6+ para áreas comuns",
        "Ideal para áreas de lazer"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Planos para Áreas Comuns e Administrativas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Banda larga de alta velocidade para espaços comuns e administração do seu condomínio
          </p>
        </div>
        
        {/* Grid de cards de planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`animate-fade-up border ${index === 1 ? 'border-primary-500 shadow-lg' : 'border-gray-100 shadow'} h-full flex flex-col`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                <div className="mt-1 text-primary-500 font-bold text-3xl">{plan.speed}</div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Informações de preço */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500">Mensalidade</div>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-gray-900">R$</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 mb-1">/mês</span>
                  </div>
                </div>
                
                {/* Lista de recursos incluídos */}
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
                
                {/* Informações adicionais e botão de ação */}
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">
                    Pontos adicionais disponíveis por R$ 50,00/mês cada.
                  </p>
                  <Button 
                    variant={index === 1 ? "default" : "outline"}
                    className="w-full gap-2"
                    asChild
                  >
                    <Link to={`/contratar/${encodeURIComponent(plan.title)}`}>
                      Contratar para meu condomínio
                      <CheckIcon size={18} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Seção para orçamentos personalizados */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Deseja um orçamento personalizado ou velocidades maiores?
          </p>
          <Button size="lg" variant="outline" className="gap-2">
            Solicitar orçamento personalizado
            <CheckIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminPlansSection;
