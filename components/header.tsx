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
  const mainDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        mainDropdownRef.current &&
        !mainDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesItems: DropdownItem[] = [
    {
      icon: <Shield className='inline-block !w-5 !h-5' />,
      title: 'Malware Removal',
      description: 'Complete malware cleanup & security hardening',
      href: '/services/malware-removal',
    },
    {
      icon: <Wrench className='inline-block !w-5 h-5' />,
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

  // Main dropdown: About, Contact, Blogs, Terms, Refund, Privacy
  const mainDropdownItems: DropdownItem[] = [
    {
      icon: <User className='inline-block !w-5 !h-5' />,
      title: 'About',
      description: 'Learn more about us',
      href: '/about',
    },
    {
      icon: <FileText className='inline-block !w-5 !h-5' />,
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/contact',
    },
    {
      icon: <BookOpen className='inline-block !w-5 !h-5' />,
      title: 'Blogs',
      description: 'Latest insights and tutorials',
      href: '/blog',
    },
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
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const DropdownMenu = ({
    items,
    isOpen,
    onClose,
    dropdownRef,
  }: {
    items: DropdownItem[];
    isOpen: boolean;
    onClose: () => void;
    dropdownRef?: React.RefObject<HTMLDivElement | null>;
  }) => (
    <div
      ref={dropdownRef}
      className={`absolute left-0 top-full z-50 mt-2 w-48 min-w-[320px] rounded-lg bg-slate-800 py-2 shadow-xl transition-all duration-200 ${
        isOpen
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-1 opacity-0'
      }`}
      role='menu'>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className='group flex items-center gap-3 hover:bg-slate-700 px-4 py-2.5 text-gray-400 transition-colors'
          role='menuitem'
          onClick={onClose}>
          <span className='flex justify-center items-center bg-slate-600 group-hover:bg-slate-500 rounded-full !w-10 !h-10 overflow-hidden group-hover:text-slate-100 transition-colors'>
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
              <div className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 rounded w-8 h-8'>
                <Rocket className='w-5 h-5 text-slate-900' />
              </div>
            </Link>

            {/* Mobile Services */}
            <Link
              href='/services'
              className='group sm:hidden inline relative text-gray-400 hover:text-white cursor-pointer'>
              Services
            </Link>

            {/* Desktop navigation items */}
            <div className='hidden sm:flex sm:items-center gap-5'>
              {/* Hamburger Menu Button */}
              <div className='relative flex items-center' ref={mainDropdownRef}>
                <button
                  className='text-gray-400 hover:text-white cursor-pointer'
                  aria-label='Open Navigation Dropdown'
                  type='button'
                  onClick={() => toggleDropdown('main')}>
                  <Menu className='w-5 h-5' />
                </button>
                <DropdownMenu
                  items={mainDropdownItems}
                  isOpen={activeDropdown === 'main'}
                  onClose={closeDropdown}
                />
              </div>

              <Link href='/hire-me' className='text-gray-400 hover:text-white'>
                Hire Me
              </Link>

              {/* Services Dropdown */}
              <div
                className='relative flex items-center'
                ref={servicesDropdownRef}>
                <button
                  className='text-gray-400 hover:text-white cursor-pointer'
                  aria-label='Open Services Dropdown'
                  type='button'
                  onClick={() => toggleDropdown('services')}>
                  <span>
                    Services <ChevronDown className='inline-block w-3 h-3' />
                  </span>
                </button>
                <DropdownMenu
                  items={servicesItems}
                  isOpen={activeDropdown === 'services'}
                  onClose={closeDropdown}
                />
              </div>

              {/* Templates (no submenu) */}
              <Link
                href='/templates'
                className='text-gray-400 hover:text-white'>
                Templates
              </Link>

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
                className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 px-4 py-2 rounded-full w-28 h-8 font-medium text-slate-900 text-sm transition-all duration-300 cursor-pointer'
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
            className={`fixed bottom-0 left-0 right-0 top-0 z-40 flex items-center bg-slate-900 ${
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
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/refund-policy'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/templates'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className='hover:text-blue-300 md:text-lg text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href='/login'
                  className='text-white md:text-lg text-xl transition-opacity duration-300'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href='/signup'
                  className='text-pink-400 hover:text-green-400 md:text-lg text-xl transition-opacity duration-300'
                  onClick={() => setIsMobileMenuOpen(false)}>
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
