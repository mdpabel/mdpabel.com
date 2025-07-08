// components/component-wrapper.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Wrench,
  Code,
  FileText,
  Scale,
  RotateCcw,
  BookOpen,
  FolderOpen,
  User,
  Rocket,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Link from 'next/link';

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesItems: DropdownItem[] = [
    {
      icon: <Shield className='inline-block w-5 h-5' />,
      title: 'Malware Removal',
      description: 'Complete malware cleanup & security hardening',
      href: '/services/malware-removal',
    },
    {
      icon: <Wrench className='inline-block w-5 h-5' />,
      title: 'Website Maintenance',
      description: 'Ongoing support & performance optimization',
      href: '/services/website-maintenance',
    },
    {
      icon: <Code className='inline-block w-5 h-5' />,
      title: 'Website Development',
      description: 'Custom web applications & solutions',
      href: '/services/website-development',
    },
  ];

  const resourcesItems: DropdownItem[] = [
    {
      icon: <BookOpen className='inline-block w-5 h-5' />,
      title: 'Blogs',
      description: 'Latest insights and tutorials',
      href: '/blog',
    },
    {
      icon: <FileText className='inline-block w-5 h-5' />,
      title: 'Terms and Conditions',
      description: 'Legal terms and agreements',
      href: '/terms',
    },
    {
      icon: <RotateCcw className='inline-block w-5 h-5' />,
      title: 'Refund Policy',
      description: 'Our refund and cancellation policy',
      href: '/refund-policy',
    },
    {
      icon: <Scale className='inline-block w-5 h-5' />,
      title: 'Privacy Policy',
      description: 'How we handle your data',
      href: '/privacy',
    },
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const DropdownMenu = ({
    items,
    isOpen,
    onClose,
  }: {
    items: DropdownItem[];
    isOpen: boolean;
    onClose: () => void;
  }) => (
    <div
      className={`pointer-events-none invisible absolute left-0 top-full z-90 mt-2 w-48 min-w-[320px] -translate-y-1 rounded-lg bg-slate-800 py-2 opacity-0 shadow-xl transition-all duration-100 ${
        isOpen ? 'pointer-events-auto visible translate-y-0 opacity-100' : ''
      }`}
      role='menu'>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className='group flex items-center gap-3 hover:bg-slate-700 px-4 py-2.5 text-gray-400 transition-colors'
          role='menuitem'
          onClick={onClose}>
          <span className='flex justify-center items-center bg-slate-600 group-hover:bg-slate-500 rounded-full w-[40px] h-[40px] group-hover:text-slate-100 transition-colors'>
            {item.icon}
          </span>
          <span className='flex flex-col'>
            <span className='font-medium text-slate-300 group-hover:text-slate-100 transition-colors'>
              {item.title}
            </span>
            <span className='text-sm'>{item.description}</span>
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className='bg-slate-900 py-5 sm:py-8 text-white'>
      <ComponentWrapper>
        <nav className='flex justify-between items-center mx-auto container'>
          <div className='flex items-center gap-5'>
            {/* Logo */}
            <Link
              className='flex items-center font-medium text-white text-lg'
              href='/'
              aria-label='Home'>
              <div className='flex justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 rounded w-8 h-8'>
                <Rocket className='w-5 h-5 text-slate-900' />
              </div>
            </Link>

            {/* Mobile AI Tutor equivalent */}
            <Link
              href='/resources'
              className='group sm:hidden inline relative text-gray-400 hover:text-white'>
              Resources
            </Link>

            {/* Desktop navigation items */}
            <div className='hidden sm:flex sm:items-center gap-5'>
              {/* Hamburger Menu Button */}
              <div className='relative flex items-center'>
                <button
                  className='text-gray-400 hover:text-white'
                  aria-label='Open Navigation Dropdown'
                  onMouseEnter={() => toggleDropdown('main')}>
                  <Menu className='w-5 h-5' />
                </button>
                <div
                  className={`pointer-events-none invisible absolute left-0 top-full z-90 mt-2 w-48 min-w-[320px] -translate-y-1 rounded-lg bg-slate-800 py-2 opacity-0 shadow-xl transition-all duration-100 ${
                    activeDropdown === 'main'
                      ? 'pointer-events-auto visible translate-y-0 opacity-100'
                      : ''
                  }`}
                  role='menu'>
                  <Link
                    href='/about'
                    className='group flex items-center gap-3 hover:bg-slate-700 px-4 py-2.5 text-gray-400 transition-colors'
                    role='menuitem'>
                    <span className='flex justify-center items-center bg-slate-600 group-hover:bg-slate-500 rounded-full w-[40px] h-[40px] group-hover:text-slate-100 transition-colors'>
                      <User className='inline-block w-5 h-5' />
                    </span>
                    <span className='flex flex-col'>
                      <span className='font-medium text-slate-300 group-hover:text-slate-100 transition-colors'>
                        About
                      </span>
                      <span className='text-sm'>Learn more about us</span>
                    </span>
                  </Link>
                  <Link
                    href='/contact'
                    className='group flex items-center gap-3 hover:bg-slate-700 px-4 py-2.5 text-gray-400 transition-colors'
                    role='menuitem'>
                    <span className='flex justify-center items-center bg-slate-600 group-hover:bg-slate-500 rounded-full w-[40px] h-[40px] group-hover:text-slate-100 transition-colors'>
                      <FileText className='inline-block w-5 h-5' />
                    </span>
                    <span className='flex flex-col'>
                      <span className='font-medium text-slate-300 group-hover:text-slate-100 transition-colors'>
                        Contact
                      </span>
                      <span className='text-sm'>Get in touch with us</span>
                    </span>
                  </Link>
                </div>
              </div>

              <Link href='/hire-me' className='text-gray-400 hover:text-white'>
                Hire Me
              </Link>

              {/* Services Dropdown */}
              <div
                className='relative flex items-center'
                ref={servicesDropdownRef}>
                <button
                  className='text-pink-100 hover:text-white'
                  aria-label='Open Services Dropdown'
                  onMouseEnter={() => toggleDropdown('services')}>
                  <span>
                    Services <ChevronDown className='inline-block w-3 h-3' />
                  </span>
                </button>
                <DropdownMenu
                  items={servicesItems}
                  isOpen={activeDropdown === 'services'}
                  onClose={() => setActiveDropdown(null)}
                />
              </div>

              {/* Resources Dropdown */}
              <div
                className='relative flex items-center'
                ref={resourcesDropdownRef}>
                <button
                  className='text-gray-400 hover:text-white'
                  aria-label='Open Resources Dropdown'
                  onMouseEnter={() => toggleDropdown('resources')}>
                  <span className='group relative flex items-center gap-1 mr-3 hover:text-white'>
                    Resources
                    <ChevronDown className='inline-block w-3 h-3' />
                  </span>
                </button>
                <DropdownMenu
                  items={resourcesItems}
                  isOpen={activeDropdown === 'resources'}
                  onClose={() => setActiveDropdown(null)}
                />
              </div>

              <Link
                href='/case-studies'
                className='group hidden xl:block relative text-gray-400 hover:text-white'>
                Case Studies
              </Link>
            </div>
          </div>

          {/* Right side - Login/Signup */}
          <ul className='hidden sm:flex justify-end items-center gap-5 w-[172px] h-8'>
            <li className='transition-opacity duration-300'>
              <Link href='/login' className='text-gray-400 hover:text-white'>
                Login
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              <Link
                className='flex justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 px-4 py-2 rounded-full w-28 h-8 font-medium text-slate-900 text-sm transition-all duration-300 cursor-pointer'
                href='/signup'>
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Button */}
          <button
            className='sm:hidden block text-gray-400 hover:text-gray-50 cursor-pointer'
            aria-label='Menu'
            onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className='w-5 h-5' />
          </button>

          {/* Mobile Navigation Items */}
          <div
            className={`fixed top-0 right-0 bottom-0 left-0 z-40 flex items-center bg-slate-900 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='block top-6 right-6 absolute text-gray-400 hover:text-gray-50 cursor-pointer'
              aria-label='Close Menu'>
              <X className='w-5 h-5' />
            </button>

            <ul className='flex flex-col items-center gap-2 md:gap-3 w-full'>
              <li>
                <Link
                  href='/services'
                  className='hover:text-blue-300 md:text-lg text-xl'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/resources'
                  className='hover:text-blue-300 md:text-lg text-xl'>
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className='hover:text-blue-300 md:text-lg text-xl'>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href='/login'
                  className='text-white md:text-lg text-xl transition-opacity duration-300'>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href='/signup'
                  className='text-pink-400 hover:text-green-400 md:text-lg text-xl transition-opacity duration-300'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </ComponentWrapper>
    </div>
  );
};

export default Header;
