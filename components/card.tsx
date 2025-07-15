import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      'bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden',
      className,
    )}
    {...props}
  />
);

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn('p-6 border-slate-700 border-b', className)} {...props} />
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={cn('font-bold text-white text-xl', className)} {...props} />
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn('p-6', className)} {...props} />
);
