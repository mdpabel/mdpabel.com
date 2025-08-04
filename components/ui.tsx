import { siteData } from '@/data/site-data';
import { cn } from '@/lib/utils';
import { Award, Globe, Star } from 'lucide-react';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

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
    'sm:mb-4 font-bold text-transparent text-3xl sm:text-6xl ' +
    'sm:leading-tight';

  return (
    <Tag className={cn(baseClasses, className)} {...props}>
      {children}
    </Tag>
  );
};

type DescriptionProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Description = ({
  className,
  children,
  ...props
}: DescriptionProps) => {
  return (
    <p
      {...props}
      className={cn(
        'mx-auto mb-12 max-w-4xl text-slate-400 text-xl',
        className,
      )}>
      {children}
    </p>
  );
};

export const StatsCards = () => {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-4 mb-16'>
      <div className='group bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-blue-500 rounded-xl transition-all duration-300'>
        <div className='bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 font-bold text-transparent text-3xl'>
          4500+
        </div>
        <div className='text-slate-300'>Websites Secured</div>
      </div>
      <div className='group bg-slate-800/50 hover:shadow-green-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-green-500 rounded-xl transition-all duration-300'>
        <div className='bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2 font-bold text-transparent text-3xl'>
          99.9%
        </div>
        <div className='text-slate-300'>Success Rate</div>
      </div>
      <div className='group bg-slate-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm p-6 border border-slate-700 hover:border-purple-500 rounded-xl transition-all duration-300'>
        <div className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 font-bold text-transparent text-3xl'>
          30min
        </div>
        <div className='text-slate-300'>Response Time</div>
      </div>
      <div className='group bg-slate-800/50 hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm p-6 border border-slate-700 hover:border-yellow-500 rounded-xl transition-all duration-300'>
        <div className='bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2 font-bold text-transparent text-3xl'>
          24/7
        </div>
        <div className='text-slate-300'>Support Available</div>
      </div>
    </div>
  );
};

export const TrustIndicator = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 text-sm'>
      <div className='flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 border border-slate-700 rounded-full'>
        <Star className='w-4 h-4 text-yellow-400' />
        <span className='text-slate-300'>5.0 Rating</span>
      </div>
      <div className='flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 border border-slate-700 rounded-full'>
        <Globe className='w-4 h-4 text-blue-400' />
        <span className='text-slate-300'>
          {' '}
          {siteData.stats.clientsSatisfied} Global Clients
        </span>
      </div>
      <div className='flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 border border-slate-700 rounded-full'>
        <Award className='w-4 h-4 text-purple-400' />
        <span className='text-slate-300'>Certified Expert</span>
      </div>
    </div>
  );
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 py-3 rounded-lg w-full font-bold text-white transition-all duration-300',
        className,
      )}>
      {children}
    </button>
  );
};

type HeadingType = HTMLAttributes<HTMLHeadElement> & {};

export const H1 = ({ children, className, ...props }: HeadingType) => {
  return (
    <h1
      {...props}
      className={cn(
        'mb-4 font-semibold text-slate-300 dark:text-zinc-100 text-4xl sm:text-5xl leading-[1.1em] tracking-tight',
        className,
      )}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: HeadingType) => {
  return (
    <h1
      {...props}
      className={cn(
        'font-semibold text-slate-300 text-2xl sm:text-3xl leading-[1.1em] tracking-tight',
        className,
      )}>
      {children}
    </h1>
  );
};

export default Title;
