import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          {
            'bg-primary text-white shadow-[0_0_20px_-5px_var(--primary-glow)] hover:shadow-[0_0_25px_-5px_var(--primary-glow)] hover:-translate-y-0.5':
              variant === 'primary',
            'bg-secondary text-white shadow-[0_0_20px_-5px_var(--secondary-glow)] hover:shadow-[0_0_25px_-5px_var(--secondary-glow)] hover:-translate-y-0.5':
              variant === 'secondary',
            'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md':
              variant === 'outline',
            'hover:bg-white/5 text-slate-300 hover:text-white': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, cn };
