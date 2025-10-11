'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Shield,
  FileText,
  NotebookText,
  Code2,
  User,
  Rocket,
  Bug,
  BarChart3,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Link from 'next/link';
import SearchForm from './search';
import { FaQ } from 'react-icons/fa6';
import { createPortal } from 'react-dom';

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // for portal

  const servicesDropdownTriggerRef = useRef<HTMLDivElement>(null);
  const mainDropdownTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Strengthen header bg when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const outServices =
        servicesDropdownTriggerRef.current &&
        !servicesDropdownTriggerRef.current.contains(event.target as Node);
      const outMain =
        mainDropdownTriggerRef.current &&
        !mainDropdownTriggerRef.current.contains(event.target as Node);

      if (activeDropdown === 'services' && outServices) setActiveDropdown(null);
      if (activeDropdown === 'main' && outMain) setActiveDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // 🔒 Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : original || '';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMobileMenuOpen, mounted]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
      icon: <NotebookText className='inline-block !w-5 !h-5' />,
      title: 'Guides',
      description: 'Latest insights and tutorials',
      href: '/guides',
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

  const mobileMenuItems: DropdownItem[] = [
    {
      icon: <User className='inline-block !w-5 !h-5' />,
      title: 'About',
      description: 'Learn more about us',
      href: '/about',
    },
    {
      icon: <Shield className='inline-block !w-5 !h-5' />,
      title: 'Services',
      description: 'Explore our professional services',
      href: '/services',
    },
    {
      icon: <BarChart3 className='inline-block !w-5 !h-5' />,
      title: 'Case Studies',
      description: 'Browse our case studies',
      href: '/case-studies',
    },
    {
      icon: <Bug className='inline-block !w-5 !h-5' />,
      title: 'Malware Log',
      description: 'View our malware removal logs',
      href: '/malware-log',
    },
    {
      icon: <FileText className='inline-block !w-5 !h-5' />,
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/contact',
    },
    {
      icon: <NotebookText className='inline-block !w-5 !h-5' />,
      title: 'Blogs',
      description: 'Latest insights and tutorials',
      href: '/blog',
    },
  ];

  const toggleDropdown = (d: string) =>
    setActiveDropdown(activeDropdown === d ? null : d);
  const closeDropdown = () => setActiveDropdown(null);

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
      role='menu'
      className={`absolute left-0 top-full z-[70] mt-2 min-w-[380px] rounded-lg bg-slate-800 py-2 shadow-xl transition-all duration-200 ${
        isOpen
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-1 opacity-0'
      }`}>
      {items.map((item, i) => (
        <Link
          prefetch
          key={i}
          href={item.href}
          role='menuitem'
          onClick={onClose}
          className='group flex items-center gap-3 hover:bg-slate-700 px-4 py-2.5 text-gray-400 transition-colors'>
          <span className='flex justify-center items-center bg-slate-600 group-hover:bg-slate-500 rounded-full w-10 h-10 overflow-hidden text-slate-300 group-hover:text-slate-100 transition-colors'>
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

  // Mobile overlay via Portal (escapes sticky header stacking context)
  const MobileOverlay = () =>
    mounted
      ? createPortal(
          <div
            role='dialog'
            aria-modal='true'
            className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm p-6 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <button
              aria-label='Close Menu'
              onClick={() => setIsMobileMenuOpen(false)}
              className='top-6 right-6 absolute text-gray-300 hover:text-white cursor-pointer'>
              <X className='w-6 h-6' />
            </button>

            <ul className='flex flex-col items-center gap-4 w-full'>
              <div className='flex flex-col gap-2'>
                {mobileMenuItems.map((item, index) => (
                  <li key={`mobile-main-${index}`}>
                    <Link
                      prefetch
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='group flex items-center gap-4 hover:bg-slate-800/70 p-3 rounded-lg transition-colors duration-200'>
                      <span className='flex justify-center items-center bg-slate-700 group-hover:bg-purple-600 rounded-full w-10 h-10 overflow-hidden text-slate-300 group-hover:text-white transition-colors duration-200 shrink-0'>
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

              <li className='my-4 border-slate-700/60 border-t w-full'></li>

              <div className='flex items-center gap-4'>
                <li>
                  <Link
                    prefetch
                    href='https://mdpabe1.substack.com/'
                    target='_blank'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white text-xl transition-colors duration-200'>
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch
                    href='/hire-me'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white text-xl transition-colors duration-200'>
                    Hire Me
                  </Link>
                </li>
              </div>
            </ul>
          </div>,
          document.body,
        )
      : null;

  return (
    <header
      className={`sticky top-0 inset-x-0 z-[60] w-full backdrop-blur transition-colors ${
        scrolled
          ? 'bg-slate-900/80 border-b border-slate-700/30'
          : 'bg-slate-900/60 border-b border-transparent'
      }`}>
      <div className='py-5 text-white'>
        <ComponentWrapper>
          <nav className='flex justify-between items-center mx-auto container'>
            <div className='flex items-center gap-5'>
              {/* Logo */}
              <Link
                prefetch
                href='/'
                aria-label='Home'
                className='flex items-center font-medium text-white text-lg'>
                <div className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 rounded w-8 h-8'>
                  <Rocket className='w-5 h-5 text-slate-900' />
                </div>
              </Link>

              {/* Mobile Services */}
              <Link
                prefetch
                href='/services'
                className='sm:hidden inline text-gray-400 hover:text-white cursor-pointer'>
                Services
              </Link>

              {/* Desktop navigation */}
              <div className='hidden sm:flex items-center gap-5'>
                <div
                  className='relative flex items-center'
                  ref={mainDropdownTriggerRef}>
                  <button
                    type='button'
                    aria-label='Open Navigation Dropdown'
                    onClick={() => toggleDropdown('main')}
                    className='text-gray-400 hover:text-white cursor-pointer'>
                    <Menu className='w-5 h-5' />
                  </button>
                  <DropdownMenu
                    items={mainDropdownItems}
                    isOpen={activeDropdown === 'main'}
                    onClose={closeDropdown}
                  />
                </div>

                <div
                  className='relative flex items-center'
                  ref={servicesDropdownTriggerRef}>
                  <Link
                    prefetch
                    href='/services'
                    className='text-gray-400 hover:text-white cursor-pointer'>
                    Services
                  </Link>
                </div>

                <Link
                  prefetch
                  href='/case-studies'
                  className='text-gray-400 hover:text-white'>
                  Case Studies
                </Link>
                <Link
                  prefetch
                  href='/malware-log'
                  className='text-gray-400 hover:text-white'>
                  Malware Log
                </Link>
                <Link
                  prefetch
                  href='/blog'
                  className='text-gray-400 hover:text-white'>
                  Blog
                </Link>
              </div>
            </div>

            {/* Right side */}
            <ul className='hidden sm:flex justify-end items-center gap-5 w-[172px] h-8'>
              <SearchForm />
              <li className='transition-opacity duration-300'>
                <Link
                  prefetch
                  href='https://mdpabe1.substack.com/'
                  target='_blank'
                  className='text-gray-400 hover:text-white'>
                  Newsletter
                </Link>
              </li>
              <li className='flex items-center gap-2'>
                <Link
                  prefetch
                  href='/hire-me'
                  className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 px-6 py-2 rounded-full w-32 h-8 font-medium text-slate-900 text-sm transition-all duration-300'>
                  Hire Me
                </Link>
              </li>
            </ul>

            {/* Mobile controls */}
            <div className='sm:hidden flex items-center gap-4'>
              <SearchForm />
              <button
                aria-label='Menu'
                onClick={() => setIsMobileMenuOpen(true)}
                className='sm:hidden block text-gray-400 hover:text-gray-50 cursor-pointer'>
                <Menu className='w-5 h-5' />
              </button>
            </div>
          </nav>
        </ComponentWrapper>
      </div>

      {/* Mobile overlay portal */}
      <MobileOverlay />
    </header>
  );
};

export default Header;
