import { cn } from '@/lib/utils';
import React, { HtmlHTMLAttributes } from 'react';

interface ComponentWrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const ComponentWrapper = ({
  children,
  className,
  ...props
}: ComponentWrapperProps) => {
  return (
    <div
      {...props}
      className={cn('mx-auto px-4 w-full max-w-[870px]', className)}>
      {children}
    </div>
  );
};

export default ComponentWrapper;
