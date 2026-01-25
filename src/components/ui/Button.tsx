'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quantum-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-quantum-darker disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-quantum-cyan to-quantum-purple text-white hover:shadow-lg hover:shadow-quantum-cyan/50': variant === 'primary',
            'bg-quantum-dark text-white border border-quantum-cyan/50 hover:border-quantum-cyan hover:bg-quantum-cyan/10': variant === 'secondary',
            'border border-quantum-cyan/30 text-quantum-cyan hover:bg-quantum-cyan/10': variant === 'outline',
            'text-quantum-cyan hover:bg-quantum-cyan/10': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
