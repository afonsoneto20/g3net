
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

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
      <div className="rounded-full bg-primary-50 p-3 w-12 h-12 flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
