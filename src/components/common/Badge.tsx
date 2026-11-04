import React from 'react';
import { AvailabilityType } from '../../types/portfolio';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'stone' | 'green' | 'blue' | 'coral' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  const variantClasses = {
    default: 'bg-cohere-softStone text-cohere-ink border border-cohere-hairline',
    outline: 'bg-transparent text-cohere-slate border border-cohere-hairline hover:border-cohere-primary transition-colors',
    stone: 'bg-cohere-softStone text-cohere-ink font-medium',
    green: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-medium',
    blue: 'bg-blue-500/10 text-cohere-actionBlue border border-blue-500/20 font-medium',
    coral: 'bg-orange-500/10 text-cohere-coral border border-orange-500/20 font-medium',
    dark: 'bg-cohere-primary text-cohere-canvas border border-cohere-hairline font-medium',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill font-mono tracking-wide uppercase transition-all duration-150 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};

export const AvailabilityBadge: React.FC<{ type: AvailabilityType; label?: string }> = ({ 
  type, 
  label 
}) => {
  switch (type) {
    case 'public-store':
      return (
        <Badge variant="green" size="sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {label || 'Google Play Store'}
        </Badge>
      );
    case 'public-web':
      return (
        <Badge variant="blue" size="sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cohere-actionBlue" />
          {label || 'Live Production'}
        </Badge>
      );
    case 'enterprise-private':
      return (
        <Badge variant="stone" size="sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cohere-slate" />
          {label || 'Enterprise Banking'}
        </Badge>
      );
    case 'internal-system':
      return (
        <Badge variant="outline" size="sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {label || 'Internal Corporate System'}
        </Badge>
      );
    default:
      return null;
  }
};
