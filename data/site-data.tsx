import {
  Shield,
  Wrench,
  Code,
  FileText,
  Scale,
  RotateCcw,
  BookOpen,
  User,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Server,
  Coffee,
  Gamepad2,
} from 'lucide-react';

export const siteData = {
  personal: {
    name: 'MD Pabel',
    tagline: 'Build. Secure. Scale.',
    logo: <Rocket className='w-5 h-5 text-slate-900' />,
    email: 'hello@3zerodigital.com',
    phone: '+1 (555) 123-4567',
    address: 'Remote, Worldwide',
    title: 'Full Stack Web Developer & Security Specialist',
    company: '3Zero Digital',
    description:
      'Building secure, scalable web solutions with over 4 years of experience serving clients worldwide.',
    avatar: '/images/pabel-avatar.jpg', // Add your photo path
    location: 'Remote, Worldwide',
    experience: `${new Date().getFullYear() - 2018} Years`,
    timezone: 'GMT+6',
  },

  navigation: {
    main: [
      { title: 'Home', href: '/' },
      { title: 'Services', href: '/services' },
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
      { title: 'Hire Me', href: '/hire-me' },
      { title: 'Templates', href: '/templates' },
      { title: 'Case Studies', href: '/case-studies' },
    ],

    services: [
      {
        icon: <Shield className='inline-block !w-5 !h-5' />,
        title: 'Malware Removal',
        description: 'Complete malware cleanup & security hardening',
        href: '/services/malware-removal',
      },
      {
        icon: <Wrench className='inline-block !w-5 !h-5' />,
        title: 'Website Maintenance',
        description: 'Ongoing support & performance optimization',
        href: '/services/website-maintenance',
      },
      {
        icon: <Code className='inline-block !w-5 !h-5' />,
        title: 'Website Development',
        description: 'Custom web applications & solutions',
        href: '/services/website-development',
      },
    ],

    legal: [
      {
        icon: <FileText className='inline-block !w-5 !h-5' />,
        title: 'Terms and Conditions',
        description: 'Legal terms and agreements',
        href: '/terms',
      },
      {
        icon: <RotateCcw className='inline-block !w-5 !h-5' />,
        title: 'Refund Policy',
        description: 'Our refund and cancellation policy',
        href: '/refund-policy',
      },
      {
        icon: <Scale className='inline-block !w-5 !h-5' />,
        title: 'Privacy Policy',
        description: 'How we handle your data',
        href: '/privacy',
      },
    ],

    resources: [
      {
        icon: <BookOpen className='inline-block !w-5 !h-5' />,
        title: 'Blogs',
        description: 'Latest insights and tutorials',
        href: '/blog',
      },
      {
        icon: <FileText className='inline-block !w-5 !h-5' />,
        title: 'Case Studies',
        description: 'Real-world project examples',
        href: '/case-studies',
      },
      {
        icon: <Code className='inline-block !w-5 !h-5' />,
        title: 'Templates',
        description: 'Ready-to-use templates',
        href: '/templates',
      },
    ],
  },

  social: {
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com',
        icon: <Github className='w-5 h-5' />,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <Linkedin className='w-5 h-5' />,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: <Twitter className='w-5 h-5' />,
      },
      {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: <Facebook className='w-5 h-5' />,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: <Instagram className='w-5 h-5' />,
      },
    ],
  },

  contact: {
    email: 'hello@3zerodigital.com',
    phone: '+1 (555) 123-4567',
    address: 'Remote, Worldwide',
    hours: 'Mon-Fri: 9AM-6PM GMT+6',
  },

  stats: {
    hackedWebsites: '4200+',
    recoveredDomains: '300+',
    completedProjects: '1600+',
    clientsSatisfied: '1600+',
    dsaProblems: '800+',
    soccerMatches: '3500+',
    winRate: '50%',
    experience: `${new Date().getFullYear() - 2018}+ Years`,
  },

  companies: {
    current: [
      {
        name: 'Trueline',
        location: 'USA',
        role: 'Full Stack Developer',
        description:
          'Custom development, feature implementation, website maintenance, and web security hardening.',
        tasks: [
          'Custom Development',
          'Feature Implementation',
          'Website Maintenance',
          'Security Hardening',
          'Performance Optimization',
        ],
      },
      {
        name: 'CollectDev',
        location: 'Canada',
        role: 'Next.js Developer',
        description:
          'Building modern, scalable applications with Next.js and PostgreSQL.',
        tasks: [
          'Next.js Development',
          'PostgreSQL Integration',
          'WordPress Development',
          'Modern Web Apps',
        ],
      },
    ],
    freelance: [
      {
        platform: 'Fiverr',
        clients: '1600+',
        rating: '5.0',
        specialties: [
          'WordPress Security',
          'Malware Removal',
          'Web Development',
        ],
      },
      {
        platform: 'Upwork',
        clients: '1600+',
        rating: '100%',
        specialties: [
          'Full Stack Development',
          'Security Solutions',
          'Performance Optimization',
        ],
      },
    ],
  },

  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'],
    backend: ['Node.js', 'Express', 'Django', 'Laravel', 'FastAPI'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
    tools: ['Prisma', 'Git', 'Docker', 'AWS', 'Vercel', 'Netlify'],
    cms: ['WordPress', 'Strapi', 'Contentful', 'Sanity'],
    security: [
      'Malware Removal',
      'Security Hardening',
      'SSL Implementation',
      'Backup Solutions',
    ],
  },

  services: [
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Malware Removal & Security',
      description:
        'Complete malware cleanup, security hardening, and protection against future threats.',
      features: [
        'Malware Detection & Removal',
        'Security Hardening',
        'Blacklist Recovery',
        'SSL Implementation',
      ],
    },
    {
      icon: <Code className='w-6 h-6' />,
      title: 'Full Stack Development',
      description:
        'Custom web applications built with modern technologies and best practices.',
      features: [
        'React/Next.js Apps',
        'Node.js APIs',
        'Database Design',
        'Third-party Integrations',
      ],
    },
    {
      icon: <Wrench className='w-6 h-6' />,
      title: 'Website Maintenance',
      description:
        'Ongoing support, updates, and performance optimization for your websites.',
      features: [
        'Regular Updates',
        'Performance Optimization',
        'Bug Fixes',
        'Content Management',
      ],
    },
    {
      icon: <Server className='w-6 h-6' />,
      title: 'WordPress Solutions',
      description:
        'WordPress development, customization, and security solutions.',
      features: [
        'Custom Themes',
        'Plugin Development',
        'E-commerce Solutions',
        'Migration Services',
      ],
    },
  ],

  interests: {
    coffee: {
      icon: <Coffee className='w-5 h-5' />,
      title: 'Coffee Enthusiast',
      description: 'Perfect blend: Coffee + Coffee Mate + Sugar',
    },
    gaming: {
      icon: <Gamepad2 className='w-5 h-5' />,
      title: 'Dream League Soccer',
      description: '3500+ matches played with 50% win rate',
    },
  },
};
