'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Web Security Hardening',
      description:
        'Comprehensive security audits, malware removal, and protection against vulnerabilities. Keep your website safe with zero-vulnerability solutions.',
      icon: '🔒',
      features: [
        'Malware Removal',
        'Blacklist Recovery',
        'Security Audits',
        'Performance Optimization',
      ],
    },
    {
      title: 'Full Stack Development',
      description:
        'Custom web applications built with modern technologies. From concept to deployment with zero downtime guarantee.',
      icon: '💻',
      features: [
        'Next.js Applications',
        'React Development',
        'Node.js Backend',
        'Database Design',
      ],
    },
    {
      title: 'WordPress Solutions',
      description:
        'Expert WordPress development, maintenance, and optimization. Delivering zero-error solutions for your content needs.',
      icon: '🔧',
      features: [
        'Custom Themes',
        'Plugin Development',
        'Performance Optimization',
        'Maintenance',
      ],
    },
    {
      title: 'AI Agent Development',
      description:
        'Cutting-edge AI solutions and chatbots to automate your business processes and enhance user experience.',
      icon: '🤖',
      features: [
        'Custom AI Agents',
        'Chatbot Integration',
        'Process Automation',
        'Machine Learning',
      ],
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Security Overhaul',
      description:
        'Recovered a compromised online store, implemented advanced security measures, and improved site speed by 65%.',
      tech: ['WordPress', 'WooCommerce', 'Security Hardening'],
      result: '100% malware removal, 65% speed improvement',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Next.js SaaS Platform',
      description:
        'Built a scalable SaaS application with advanced authentication, payment integration, and real-time features.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe API'],
      result: 'Zero downtime deployment, 50+ active users',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Corporate Website Migration',
      description:
        'Migrated legacy website to modern stack with improved performance and enhanced security measures.',
      tech: ['React', 'Node.js', 'MongoDB'],
      result: '90% faster load times, enhanced security',
      image: '/api/placeholder/400/250',
    },
  ];

  const blogPosts = [
    {
      title: 'The Complete Guide to WordPress Security in 2025',
      excerpt:
        'Learn essential security practices to protect your WordPress site from modern threats and vulnerabilities.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Security',
    },
    {
      title: 'Building Scalable Next.js Applications',
      excerpt:
        'Best practices for architecting Next.js applications that can handle growth and maintain performance.',
      date: 'Dec 10, 2024',
      readTime: '12 min read',
      category: 'Development',
    },
    {
      title: 'AI Agents: The Future of Business Automation',
      excerpt:
        'Explore how AI agents are transforming business processes and how to implement them effectively.',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'AI',
    },
  ];

  const products = [
    {
      name: 'E-commerce Starter Kit',
      description:
        'Complete e-commerce solution with Next.js, Stripe integration, and admin dashboard.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
      price: '$299',
      features: [
        'Product Management',
        'Payment Integration',
        'Admin Dashboard',
        'Responsive Design',
      ],
    },
    {
      name: 'SaaS Boilerplate',
      description:
        'Ready-to-deploy SaaS application with authentication, billing, and multi-tenancy.',
      tech: ['Next.js', 'Prisma', 'NextAuth'],
      price: '$499',
      features: [
        'User Authentication',
        'Subscription Billing',
        'Multi-tenancy',
        'API Routes',
      ],
    },
    {
      name: 'AI Chat Widget',
      description:
        'Intelligent chatbot widget that can be integrated into any website with custom training.',
      tech: ['AI/ML', 'React', 'API Integration'],
      price: '$199',
      features: [
        'Custom Training',
        'Easy Integration',
        'Analytics Dashboard',
        'Multi-language',
      ],
    },
  ];

  return (
    <div className='bg-slate-900 min-h-screen text-white'>
      {/* Navigation */}
      <nav className='border-slate-800 border-b'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <Link href='/' className='font-bold text-blue-400 text-xl'>
                3 Zero Digital
              </Link>
            </div>
            <div className='hidden md:flex space-x-8'>
              <Link
                href='#services'
                className='hover:text-blue-400 transition-colors'>
                Services
              </Link>
              <Link
                href='#work'
                className='hover:text-blue-400 transition-colors'>
                Work
              </Link>
              <Link
                href='#blog'
                className='hover:text-blue-400 transition-colors'>
                Blog
              </Link>
              <Link
                href='#products'
                className='hover:text-blue-400 transition-colors'>
                Products
              </Link>
              <Link
                href='#contact'
                className='hover:text-blue-400 transition-colors'>
                Contact
              </Link>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-7xl text-center'>
          <h1 className='bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 font-bold text-transparent text-5xl md:text-6xl'>
            Zero Vulnerability.
            <br />
            Zero Downtime.
            <br />
            Zero Error.
          </h1>
          <p className='mx-auto mb-8 max-w-3xl text-slate-300 text-xl'>
            Full Stack Developer & Security Specialist delivering secure,
            high-performance web solutions. 4+ years of experience, 1600+
            satisfied clients, 4200+ security incidents resolved.
          </p>
          <div className='flex sm:flex-row flex-col justify-center gap-4'>
            <button className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors'>
              Start Your Project
            </button>
            <button className='px-8 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold text-lg transition-colors'>
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='px-4 sm:px-6 lg:px-8 py-16 border-slate-800 border-y'>
        <div className='mx-auto max-w-7xl'>
          <div className='gap-8 grid grid-cols-2 md:grid-cols-4 text-center'>
            <div>
              <div className='font-bold text-blue-400 text-3xl'>1600+</div>
              <div className='text-slate-400'>Happy Clients</div>
            </div>
            <div>
              <div className='font-bold text-green-400 text-3xl'>4200+</div>
              <div className='text-slate-400'>Security Issues Resolved</div>
            </div>
            <div>
              <div className='font-bold text-purple-400 text-3xl'>300+</div>
              <div className='text-slate-400'>Domains Recovered</div>
            </div>
            <div>
              <div className='font-bold text-yellow-400 text-3xl'>4+ Years</div>
              <div className='text-slate-400'>Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 font-bold text-4xl'>Services</h2>
            <p className='text-slate-300 text-xl'>
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className='gap-6 grid md:grid-cols-2 lg:grid-cols-4'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition-colors cursor-pointer'>
                <div className='mb-4 text-3xl'>{service.icon}</div>
                <h3 className='mb-3 font-semibold text-xl'>{service.title}</h3>
                <p className='mb-4 text-slate-300'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-slate-400 text-sm'>
                      <span className='mr-2 text-green-400'>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id='work' className='bg-slate-800/50 px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 font-bold text-4xl'>Case Studies</h2>
            <p className='text-slate-300 text-xl'>
              Real projects, real results
            </p>
          </div>

          <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className='bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition-transform hover:transform'>
                <div className='flex justify-center items-center bg-gradient-to-br from-blue-600 to-purple-600 h-48'>
                  <div className='font-semibold text-white text-lg'>
                    Case Study {index + 1}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='mb-3 font-semibold text-xl'>{study.title}</h3>
                  <p className='mb-4 text-slate-300'>{study.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {study.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-blue-600/20 px-2 py-1 rounded text-blue-400 text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='font-semibold text-green-400'>
                    {study.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id='blog' className='px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 font-bold text-4xl'>Latest Blog Posts</h2>
            <p className='text-slate-300 text-xl'>
              Insights, tutorials, and industry updates
            </p>
          </div>

          <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className='bg-slate-800 hover:bg-slate-700 p-6 rounded-lg transition-colors'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='bg-blue-600/20 px-2 py-1 rounded text-blue-400 text-sm'>
                    {post.category}
                  </span>
                  <span className='text-slate-400 text-sm'>{post.date}</span>
                </div>
                <h3 className='mb-3 font-semibold hover:text-blue-400 text-xl cursor-pointer'>
                  {post.title}
                </h3>
                <p className='mb-4 text-slate-300'>{post.excerpt}</p>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    {post.readTime}
                  </span>
                  <Link
                    href='#'
                    className='font-semibold text-blue-400 hover:text-blue-300 text-sm'>
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id='products'
        className='bg-slate-800/50 px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 font-bold text-4xl'>Pre-built Solutions</h2>
            <p className='text-slate-300 text-xl'>
              Ready-to-deploy applications and tools
            </p>
          </div>

          <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-slate-800 p-6 rounded-lg hover:scale-105 transition-transform hover:transform'>
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='font-semibold text-xl'>{product.name}</h3>
                  <span className='font-bold text-green-400 text-2xl'>
                    {product.price}
                  </span>
                </div>
                <p className='mb-4 text-slate-300'>{product.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {product.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className='bg-purple-600/20 px-2 py-1 rounded text-purple-400 text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className='space-y-2 mb-6'>
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-slate-400 text-sm'>
                      <span className='mr-2 text-green-400'>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className='bg-blue-600 hover:bg-blue-700 py-2 rounded-lg w-full transition-colors'>
                  Get This Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-4 font-bold text-4xl'>
            Let's Build Something Amazing
          </h2>
          <p className='mb-8 text-slate-300 text-xl'>
            Ready to secure your digital presence and scale your business?
          </p>
          <div className='gap-8 grid md:grid-cols-2 mb-8'>
            <div className='bg-slate-800 p-6 rounded-lg'>
              <h3 className='mb-3 font-semibold text-xl'>🚀 New Project</h3>
              <p className='mb-4 text-slate-300'>
                Let's discuss your requirements and build something exceptional
                together.
              </p>
              <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors'>
                Start Project
              </button>
            </div>
            <div className='bg-slate-800 p-6 rounded-lg'>
              <h3 className='mb-3 font-semibold text-xl'>
                🔒 Security Emergency
              </h3>
              <p className='mb-4 text-slate-300'>
                Website compromised? Need immediate security assistance? I'm
                here to help.
              </p>
              <button className='bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-colors'>
                Emergency Help
              </button>
            </div>
          </div>
          <div className='flex justify-center space-x-6'>
            <a
              href='mailto:contact@3zerodigital.com'
              className='text-blue-400 hover:text-blue-300 transition-colors'>
              Email
            </a>
            <a
              href='#'
              className='text-blue-400 hover:text-blue-300 transition-colors'>
              LinkedIn
            </a>
            <a
              href='#'
              className='text-blue-400 hover:text-blue-300 transition-colors'>
              GitHub
            </a>
            <a
              href='#'
              className='text-blue-400 hover:text-blue-300 transition-colors'>
              Fiverr
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-4 sm:px-6 lg:px-8 py-12 border-slate-800 border-t'>
        <div className='mx-auto max-w-7xl'>
          <div className='gap-8 grid md:grid-cols-4'>
            <div>
              <div className='mb-4 font-bold text-blue-400 text-xl'>
                3 Zero Digital
              </div>
              <p className='text-slate-400'>
                Delivering secure, high-performance web solutions with zero
                vulnerability, zero downtime, and zero error.
              </p>
            </div>
            <div>
              <h4 className='mb-4 font-semibold'>Services</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Web Security
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    WordPress Solutions
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    AI Agents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 font-semibold'>Products</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    E-commerce Kit
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    SaaS Boilerplate
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    AI Chat Widget
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 font-semibold'>Connect</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Email
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-8 pt-8 border-slate-800 border-t text-slate-400 text-center'>
            <p>&copy; 2025 3 Zero Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
