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
  Bug,
  Code2,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper'; // Assuming ComponentWrapper correctly sets max-width and centers content
import Link from 'next/link';
import SearchModalV1 from './command-menu';
import SearchForm from './search';
import { FaQ } from 'react-icons/fa6';

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Ref for the Services button and its submenu
  const servicesDropdownTriggerRef = useRef<HTMLDivElement>(null);
  // Ref for the Main menu (hamburger) button and its dropdown
  const mainDropdownTriggerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the services dropdown trigger and its content
      const isClickOutsideServicesArea =
        servicesDropdownTriggerRef.current &&
        !servicesDropdownTriggerRef.current.contains(event.target as Node);

      // Check if click is outside the main dropdown trigger and its content
      const isClickOutsideMainArea =
        mainDropdownTriggerRef.current &&
        !mainDropdownTriggerRef.current.contains(event.target as Node);

      // If 'services' dropdown is open AND the click was outside its area
      if (activeDropdown === 'services' && isClickOutsideServicesArea) {
        setActiveDropdown(null);
      }
      // If 'main' dropdown is open AND the click was outside its area
      if (activeDropdown === 'main' && isClickOutsideMainArea) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]); // Re-run effect if activeDropdown changes

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
      title: 'Track Record',
      description: 'Latest insights and tutorials',
      href: '/track-record',
    },
    {
      icon: <Code2 className='inline-block !w-5 !h-5' />,
      title: 'Snippets',
      description: 'Code snippets and examples',
      href: '/snippets',
    },
    {
      icon: <FaQ className='inline-block !w-5 !h-5' />,
      title: 'FAQs',
      description: 'Common questions with expert answers',
      href: '/faq',
    },
  ];

  // Mobile menu items (excluding less important pages like policies and terms)
  const mobileMenuItems: DropdownItem[] = [
    {
      icon: <Shield className='inline-block !w-5 !h-5' />,
      title: 'Services',
      description: 'Explore our professional services',
      href: '/services',
    },
    {
      icon: <Code className='inline-block !w-5 !h-5' />,
      title: 'Templates',
      description: 'Browse our website templates',
      href: '/templates',
    },
    {
      icon: <Bug className='inline-block !w-5 !h-5' />,
      title: 'Malware Log',
      description: 'View our malware removal logs',
      href: '/malware-log',
    },
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
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Standard Dropdown Menu (for the hamburger/main menu)
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
      className={`absolute left-0 top-full z-50 mt-2 min-w-[380px] rounded-lg bg-slate-800 py-2 shadow-xl transition-all duration-200
        ${
          isOpen
            ? 'pointer-events-auto visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-1 opacity-0'
        }`}
      role='menu'>
      {items.map((item, index) => (
        <Link
          prefetch={true}
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
    <div className='z-50 relative bg-slate-900 py-5 sm:py-8 text-white'>
      <ComponentWrapper>
        <nav className='flex justify-between items-center mx-auto container'>
          <div className='flex items-center gap-5'>
            {/* Logo */}
            <Link
              prefetch={true}
              className='flex items-center font-medium text-white text-lg'
              href='/'
              aria-label='Home'>
              <div className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 rounded w-8 h-8'>
                <Rocket className='w-5 h-5 text-slate-900' />
              </div>
            </Link>

            {/* Mobile Services - Keep as a direct link for mobile */}
            <Link
              prefetch={true}
              href='/services'
              className='group sm:hidden inline relative text-gray-400 hover:text-white cursor-pointer'>
              Services
            </Link>

            {/* Desktop navigation items */}
            <div className='hidden sm:flex sm:items-center gap-5'>
              {/* Hamburger Menu Button (for general links) */}
              <div
                className='relative flex items-center'
                ref={mainDropdownTriggerRef}>
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

              {/* Services Submenu Trigger and Menu */}
              <div
                className='relative flex items-center'
                ref={servicesDropdownTriggerRef}>
                <Link
                  prefetch={true}
                  href='/services'
                  className='text-gray-400 hover:text-white cursor-pointer'
                  aria-label='Open Services SubMenu'
                  onClick={() => toggleDropdown('services')}>
                  Services
                </Link>
              </div>

              {/* Templates (no submenu) */}
              <Link
                prefetch={true}
                href='/case-studies'
                className='text-gray-400 hover:text-white'>
                Case Studies
              </Link>

              <Link
                prefetch={true}
                href='/malware-log'
                className='text-gray-400 hover:text-white'>
                Malware Log
              </Link>

              <Link
                prefetch={true}
                href='/blog'
                className='text-gray-400 hover:text-white'>
                Blog
              </Link>
            </div>
          </div>

          {/* Right side - Newsletter/Sign Up */}
          <ul className='hidden sm:flex justify-end items-center gap-5 w-[172px] h-8'>
            <SearchForm />
            <li className='transition-opacity duration-300'>
              <Link
                prefetch={true}
                href='/newsletter'
                className='text-gray-400 hover:text-white'>
                Newsletter
              </Link>
            </li>
            <li className='flex items-center gap-2'>
              <Link
                prefetch={true}
                href='/hire-me'
                className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 px-6 py-2 rounded-full w-32 h-8 font-medium text-slate-900 text-sm transition-all duration-300 cursor-pointer'>
                Hire Me
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Button */}
          <div className='sm:hidden flex items-center gap-4'>
            <SearchForm />
            <button
              className='sm:hidden block text-gray-400 hover:text-gray-50 cursor-pointer'
              aria-label='Menu'
              onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className='w-5 h-5' />
            </button>
          </div>

          {/* Mobile Navigation Items (Full Screen Overlay) */}
          <div
            className={`fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center justify-center bg-slate-900 p-6 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='block top-6 right-6 absolute text-gray-400 hover:text-gray-50 cursor-pointer'
              aria-label='Close Menu'>
              <X className='w-6 h-6' />
            </button>

            <ul className='flex flex-col items-center gap-4 w-full'>
              <div className='flex flex-col gap-2'>
                {mobileMenuItems.map((item, index) => (
                  <li key={`mobile-main-${index}`}>
                    <Link
                      prefetch={true}
                      href={item.href}
                      className='group flex items-center gap-4 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200'
                      onClick={() => setIsMobileMenuOpen(false)}>
                      <span className='flex flex-shrink-0 justify-center items-center bg-slate-700 group-hover:bg-purple-600 rounded-full !w-10 !h-10 overflow-hidden text-slate-400 group-hover:text-white transition-colors duration-200'>
                        {item.icon}
                      </span>
                      <span className='flex flex-col'>
                        <span className='font-medium text-slate-200 group-hover:text-white text-lg transition-colors duration-200'>
                          {item.title}
                        </span>
                        <span className='text-gray-400 group-hover:text-gray-300 text-sm'>
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </div>
              <li className='my-4 border-slate-700 border-t w-full'></li>
              <div className='flex items-center gap-4'>
                <li>
                  <Link
                    prefetch={true}
                    href='/newsletter'
                    className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white text-xl transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(false)}>
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    href='/hire-me'
                    className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white text-xl transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </ComponentWrapper>
    </div>
  );
};

export default Header;
