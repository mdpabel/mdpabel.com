import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Title = ({ children, className, ...props }: Props) => {
  return (
    <h2
      {...props}
      className={cn(
        '-top-[17px] sm:left-1/2 absolute flex bg-slate-900 px-3 py-1 border border-[#1e293c] rounded-lg font-regular text-md text-slate-400 sm:-translate-x-1/2',
        className,
      )}>
      {children}
    </h2>
  );
};

export default Title;
