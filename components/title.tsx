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

import React from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /** Which HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /** The text or elements inside the heading */
  children: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  children,
  className = '',
  ...props
}) => {
  const Tag = as;
  const baseClasses =
    'bg-clip-text bg-linear-to-b from-amber-50 to-purple-500 mb-2 ' +
    'sm:mb-4 font-bold text-transparent text-2xl sm:text-5xl ' +
    'sm:leading-tight';

  return (
    <Tag className={cn(baseClasses, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
