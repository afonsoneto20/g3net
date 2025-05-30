
/**
 * Componente de card para exibição de planos
 * Utilizado para mostrar informações de planos de internet
 * Inclui título, velocidade, preço, recursos e botão de ação
 */
import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Interface para as propriedades do componente PlanCard
 * @param title - Nome do plano
 * @param speed - Velocidade do plano (ex: "500 Mbps")
 * @param price - Preço do plano (ex: "99,90")
 * @param features - Lista de recursos incluídos no plano
 * @param popular - Indica se é o plano mais popular (opcional)
 * @param className - Classes CSS adicionais (opcional)
 * @param href - Link para a página de contratação (opcional)
 */
interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  features: string[];
  popular?: boolean;
  className?: string;
  href?: string;
}

/**
 * Componente de card para exibir planos de internet
 * Usado nas seções de planos do site
 * @param props - Propriedades do componente
 */
const PlanCard = ({
  title,
  speed,
  price,
  features,
  popular = false,
  className,
  href = '/contratar',
}: PlanCardProps) => {
  return (
    <div 
      className={cn(
        // Classes base do card
        "relative rounded-2xl p-6 transition-all duration-300 card-hover bg-white h-full flex flex-col",
        // Classes condicionais baseadas na propriedade popular
        popular ? "border-2 border-primary-500 shadow-lg" : "border border-gray-100 shadow",
        className
      )}
    >
      {/* Badge de plano popular */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Mais popular
        </div>
      )}
      
      {/* Cabeçalho do plano */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="mt-1 text-primary-500 font-bold text-3xl">{speed}</div>
      </div>
      
      {/* Preço do plano */}
      <div className="mb-6">
        <div className="text-sm text-gray-500">A partir de</div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold text-gray-900">R$</span>
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 mb-1">/mês</span>
        </div>
      </div>
      
      {/* Lista de recursos */}
      <ul className="mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-3">
            <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Botão de contratação */}
      <Button 
        variant={popular ? "default" : "outline"}
        className="w-full gap-2"
        asChild
      >
        <Link to={`/contratar/${encodeURIComponent(title)}`}>
          Contratar agora
          <ArrowRight size={18} />
        </Link>
      </Button>
    </div>
  );
};

export default PlanCard;

