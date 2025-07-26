import { blacklistRemovalServices } from './blacklist-removal-services';

export interface Service {
  title: string;
  price: number;
  description: string;
  slug: string;
  featured?: boolean;
}

const coreServices: Service[] = [
  {
    title: 'Malware Removal From Hacked websites',
    price: 150,
    description:
      'Complete malware removal and security hardening for your WordPress site. We ensure your site is clean, secure, removed from blacklists, and protected from future attacks.',
    slug: 'wordpress-malware-removal',
    featured: true,
  },
  {
    title: 'Google Safe Browsing Blacklist Removal',
    price: 150,
    description:
      "Remove your site from Google's blacklist and restore visibility and reputation. Includes cleanup, request submission, and follow-up.",
    slug: 'blacklist-removal',
    featured: true,
  },
  {
    title: 'Custom WordPress Website Development',
    price: 350,
    description:
      'Professional WordPress website tailored to your business needs. Includes theme customization, essential plugins, responsive design, speed optimization, and security setup.',
    slug: 'wordpress-website-development',
    featured: true,
  },
  {
    title: 'Next.js Fullstack Website Development',
    price: 850,
    description:
      'Custom fullstack application built with Next.js, Node.js, and your preferred database. Includes authentication, admin dashboard, API integration, and SEO optimization.',
    slug: 'custom-website-development',
    featured: true,
  },
  {
    title: 'MERN Stack Web Development',
    price: 800,
    description:
      'Build modern, scalable web apps using MongoDB, Express, React, and Node.js. Includes REST APIs, admin dashboards, and secure authentication.',
    slug: 'custom-website-development',
    featured: true,
  },
  {
    title: 'React.js Website Development',
    price: 700,
    description:
      'Single-page application development using React.js. Includes routing, component architecture, and integration with APIs or headless CMS.',
    slug: 'custom-website-development',
    featured: true,
  },
  {
    title: 'Elementor Website Development',
    price: 300,
    description:
      'Professional WordPress site using Elementor. Includes section design, speed optimization, mobile responsiveness, and SEO basics.',
    slug: 'wordpress-website-development',
    featured: true,
  },
  {
    title: 'Fix WordPress 500 Internal Server Error',
    price: 80,
    description:
      'Diagnose and resolve the dreaded 500 error. Fix corrupted core files, plugin conflicts, and server misconfigurations.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix WordPress 403 Forbidden Error',
    price: 70,
    description:
      'Correct permission issues and misconfigured .htaccess files that block access to your site.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix WordPress 404 Not Found Error',
    price: 70,
    description:
      'Resolve permalink and routing issues to restore missing pages or posts.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix WordPress Fatal Errors',
    price: 100,
    description:
      'Fix fatal PHP errors, theme/plugin issues, and restore site functionality.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix "There Has Been a Critical Error on This Website"',
    price: 90,
    description:
      'Quick diagnosis and resolution of the critical error message to restore site access.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix WordPress White Screen of Death',
    price: 85,
    description:
      'Troubleshoot the blank screen issue, debug errors, and restore your site view.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'SSL Certificate Installation',
    price: 50,
    description:
      'Install and configure SSL certificates to secure your WordPress or custom website.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix Mixed Content SSL Errors',
    price: 60,
    description:
      'Correct insecure asset links to fully enable HTTPS and avoid browser warnings.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'WordPress Speed Optimization',
    price: 120,
    description:
      'Improve Core Web Vitals, reduce page load time, and enhance performance for better rankings and UX.',
    slug: 'wordpress-speed-optimization',
  },
  {
    title: 'DNS Setup & Configuration',
    price: 60,
    description:
      'Set up nameservers, DNS records (A, CNAME, MX, TXT) properly for website and email services.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix DNS Errors & Propagation Issues',
    price: 75,
    description:
      'Resolve DNS resolution issues, record misconfigurations, and domain connection failures.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'Fix WordPress Down or Not Loading',
    price: 90,
    description:
      'Diagnose and fix why your WordPress site is not accessible or down. Hosting, plugin, or code issue troubleshooting.',
    slug: 'fix-wordpress-errors',
  },
  {
    title: 'WordPress Website Migration',
    price: 150,
    description:
      'Migrate your WordPress site to a new hosting provider or domain with zero downtime and data loss.',
    slug: 'website-migration',
  },
];

export const allServices = [...coreServices, ...blacklistRemovalServices];
