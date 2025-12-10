import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, fallback, size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-block rounded-full overflow-hidden bg-white/10 ring-2 ring-white/20',
          {
            'w-8 h-8': size === 'sm',
            'w-10 h-10': size === 'md',
            'w-14 h-14': size === 'lg',
            'w-24 h-24': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-slate-300 font-medium">
            {fallback}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar };
