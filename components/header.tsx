'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
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
} from 'lucide-react';
import ComponentWrapper from './component-wrapper'; // Assuming ComponentWrapper correctly sets max-width and centers content
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

  const servicesItems: DropdownItem[] = [
    {
      icon: <Shield className='inline-block !w-5 !h-5' />,
      title: 'Malware Removal',
      description: 'Complete malware cleanup & security hardening',
      href: '/services/malware-removal',
    },
    {
      icon: <Bug className='inline-block !w-5 !h-5' />,
      title: 'Fix Website Errors',
      description: 'Troubleshoot and resolve common website issues',
      href: '/services/fix-website-errors',
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

  // Single-Column Services Submenu with fixed-size circular icons
  const ServicesSubMenu = ({
    items,
    isOpen,
    onClose,
  }: {
    items: DropdownItem[];
    isOpen: boolean;
    onClose: () => void;
  }) => {
    return (
      // The submenu itself, absolutely positioned relative to its parent div
      <div
        className={`absolute left-0 top-full z-50 mt-4 rounded-xl shadow-2xl transition-all duration-300 transform-gpu
          ${
            isOpen
              ? 'pointer-events-auto visible opacity-100 translate-y-0 scale-100' // Scale up animation
              : 'pointer-events-none invisible opacity-0 -translate-y-1 scale-95' // Scale down/out animation
          }
          bg-slate-800
          w-[calc(100vw-2rem)] md:w-[400px] // Single column means narrower width
          max-w-[400px] // Ensure it respects this width
          p-5
          `}
        role='menu'>
        {/* Changed from grid to a simple flex column */}
        <div className='flex flex-col gap-3'>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='group flex items-center gap-4 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200'
              role='menuitem'
              onClick={onClose}>
              {/* Ensure the icon container is a perfect circle by setting equal width and height */}
              <span className='flex flex-shrink-0 justify-center items-center bg-slate-700 group-hover:bg-purple-600 rounded-full !w-10 !h-10 overflow-hidden text-slate-400 group-hover:text-white transition-colors duration-200'>
                {/* The `lucide-react` icons themselves should fit within this container.
                    If they appear clipped, we might need to adjust their sizing or the container.
                    The `!w-10 !h-10` on the span is crucial for making it a square,
                    and `rounded-full` makes that square a circle. */}
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
          ))}
        </div>

        {/* Optional: Footer CTA */}
        <div className='flex justify-center mt-5 pt-4 border-slate-700 border-t'>
          <Link
            href='/services'
            className='font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200'>
            View All Services
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className='z-50 relative bg-slate-900 py-5 sm:py-8 text-white'>
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

            {/* Mobile Services - Keep as a direct link for mobile */}
            <Link
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

              <Link href='/hire-me' className='text-gray-400 hover:text-white'>
                Hire Me
              </Link>

              {/* Services Submenu Trigger and Menu */}
              {/* This parent div is relative, allowing the absolute submenu to position relative to it. */}
              <div
                className='relative flex items-center'
                ref={servicesDropdownTriggerRef}>
                <button
                  className='text-gray-400 hover:text-white cursor-pointer'
                  aria-label='Open Services SubMenu'
                  type='button'
                  onClick={() => toggleDropdown('services')}>
                  <span>
                    Services <ChevronDown className='inline-block w-3 h-3' />
                  </span>
                </button>
                <DropdownMenu // Re-using DropdownMenu for services, as it's now a single-column submenu
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

          {/* Right side - Newsletter/Sign Up */}
          <ul className='hidden sm:flex justify-end items-center gap-5 w-[172px] h-8'>
            <SignedOut>
              <li className='transition-opacity duration-300'>
                <Link
                  href='/newsletter'
                  className='text-gray-400 hover:text-white'>
                  Newsletter
                </Link>
              </li>
            </SignedOut>
            <SignedOut>
              <li className='flex items-center gap-2'>
                <SignInButton mode='modal' forceRedirectUrl='/'>
                  <button className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 px-4 py-2 rounded-full w-28 h-8 font-medium text-slate-900 text-sm transition-all duration-300 cursor-pointer'>
                    Login
                  </button>
                </SignInButton>
              </li>
            </SignedOut>
            <SignedIn>
              <li className='flex items-center gap-2'>
                <UserButton />
              </li>
            </SignedIn>
            <SignedIn>
              <li className='flex items-center gap-2'>
                <Link
                  href='/chat'
                  className='flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 px-4 py-2 rounded-full w-28 h-8 font-medium text-slate-900 text-sm transition-all duration-300 cursor-pointer'>
                  Chat
                </Link>
              </li>
            </SignedIn>
          </ul>

          {/* Mobile Navigation Button */}
          <button
            className='sm:hidden block text-gray-400 hover:text-gray-50 cursor-pointer'
            aria-label='Menu'
            onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className='w-5 h-5' />
          </button>

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
              <li>
                <Link
                  href='/services'
                  className='font-semibold text-white hover:text-purple-300 text-2xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/hire-me'
                  className='font-semibold text-white hover:text-purple-300 text-2xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Hire Me
                </Link>
              </li>
              <li>
                <Link
                  href='/templates'
                  className='font-semibold text-white hover:text-purple-300 text-2xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className='font-semibold text-white hover:text-purple-300 text-2xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Case Studies
                </Link>
              </li>
              <li className='my-4 border-slate-700 border-t w-full'></li>{' '}
              {/* Separator */}
              {mainDropdownItems.map((item, index) => (
                <li key={`mobile-main-${index}`}>
                  <Link
                    href={item.href}
                    className='text-gray-300 hover:text-purple-200 text-xl'
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className='my-4 border-slate-700 border-t w-full'></li>{' '}
              {/* Separator */}
              <li>
                <Link
                  href='/newsletter'
                  className='text-gray-300 hover:text-purple-200 text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href='/login'
                  className='text-gray-300 hover:text-purple-200 text-xl'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href='/signup'
                  className='bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white text-xl transition-colors duration-200'
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
