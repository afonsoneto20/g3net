
/**
 * Componente de card para exibição de recursos
 * Utilizado para mostrar características e benefícios dos serviços
 * Inclui ícone, título e descrição do recurso
 */
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Interface para as propriedades do componente FeatureCard
 * @param icon - Ícone a ser exibido no card
 * @param title - Título do recurso
 * @param description - Descrição do recurso
 * @param className - Classes CSS adicionais (opcional)
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * Componente de card para exibir recursos/características
 * Usado nas seções de features do site
 */
const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white border border-gray-100 shadow card-hover h-full flex flex-col",
      className
    )}>
      {/* Ícone do recurso */}
      <div className="rounded-full bg-primary-50 p-3 w-12 h-12 flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      {/* Título do recurso */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      {/* Descrição do recurso */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

