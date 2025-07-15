import { ShieldCheck, Star, Download, ArrowRight } from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Title from './ui';
import Image from 'next/image';

// Expanded templates with categories
const TEMPLATES = [
  {
    id: 'secure-ecommerce',
    title: 'SecureCart',
    description:
      'Hardened e-commerce template with advanced security features and PCI compliance.',
    image: '/images/templates/secure-ecommerce.jpg',
    price: 149,
    discountPrice: 129,
    features: [
      'Advanced security hardening',
      'PCI compliance ready',
      'Stripe & PayPal integration',
    ],
    category: 'ecommerce',
    stars: 4.9,
    downloads: 247,
  },
  {
    id: 'fashion-store',
    title: 'FashionHub',
    description:
      'E-commerce template designed for fashion and apparel stores with lookbook features.',
    image: '/images/templates/fashion-store.jpg',
    price: 129,
    features: ['Product variants', 'Lookbook gallery', 'Instagram integration'],
    category: 'ecommerce',
    stars: 4.6,
    downloads: 186,
  },
  {
    id: 'admin-dashboard',
    title: 'AdminPro',
    description:
      'Fully-featured admin dashboard with dark mode, analytics, and user management.',
    image: '/images/templates/admin-dashboard.jpg',
    price: 99,
    features: ['Responsive dashboard', 'Dark/light mode', 'User management'],
    category: 'dashboard',
    stars: 4.7,
    downloads: 189,
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Templates' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'dashboard', label: 'Dashboards' },
  { id: 'blog', label: 'Blogs' },
  { id: 'portfolio', label: 'Portfolios' },
];

const FeaturedTemplates = () => {
  return (
    <div className='px-5 sm:px-0 py-6 sm:py-16'>
      <div className='relative space-y-8'>
        <Title>NextJS Templates</Title>
        <div className='pb-8' />

        <ComponentWrapper>
          <p className='mx-auto mb-8 max-w-2xl text-slate-400 text-center'>
            Pre-built, secure, and optimized NextJS templates for small
            businesses. Each template includes security hardening and
            performance optimization.
          </p>

          {/* Templates Grid */}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {TEMPLATES.map((template) => (
              <div
                key={template.id}
                className='group bg-slate-900 hover:shadow-lg hover:shadow-purple-900/10 border border-slate-800 hover:border-slate-600 rounded-lg overflow-hidden transition-all duration-300'>
                <div className='relative w-full h-48'>
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    objectFit='cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70'></div>

                  <div className='bottom-3 left-4 absolute flex items-center gap-2'>
                    <div className='flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-yellow-400 text-xs'>
                      <Star className='fill-current w-3 h-3' />
                      <span>{template.stars}</span>
                    </div>

                    <div className='flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-slate-300 text-xs'>
                      <Download className='w-3 h-3' />
                      <span>{template.downloads}+</span>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-bold text-slate-300 text-xl'>
                      {template.title}
                    </h3>
                    <span className='bg-slate-800 px-2 py-1 rounded-full text-slate-400 text-xs'>
                      {
                        CATEGORIES.find((c) => c.id === template.category)
                          ?.label
                      }
                    </span>
                  </div>

                  <p className='mb-4 text-slate-400 text-sm'>
                    {template.description}
                  </p>

                  <ul className='space-y-1 mb-4'>
                    {template.features.map((feature, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 text-slate-400 text-xs'>
                        <ShieldCheck className='w-3 h-3 text-purple-400' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='flex justify-between items-center mb-4 pt-4 border-slate-800 border-t'>
                    <div className='flex items-center'>
                      <span className='font-bold text-slate-300 text-xl'>
                        ${template.discountPrice || template.price}
                      </span>
                      {template.discountPrice && (
                        <span className='ml-2 text-slate-500 text-sm line-through'>
                          ${template.price}
                        </span>
                      )}
                    </div>

                    <a
                      href={`/templates/${template.id}`}
                      className='flex items-center gap-1 group-hover:gap-2 font-medium text-purple-400 hover:text-purple-300 text-xs transition-all'>
                      View Details <ArrowRight className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default FeaturedTemplates;
