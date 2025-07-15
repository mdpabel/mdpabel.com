import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => (
  <input
    className={cn(
      'bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400',
      className,
    )}
    {...props}
  />
);
