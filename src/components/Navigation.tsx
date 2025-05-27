'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { HomeIcon, BuildingOfficeIcon, CubeIcon, WrenchScrewdriverIcon, PhotoIcon, PhoneIcon } from '@heroicons/react/24/solid';

const navigation = {
  main: [
    { name: 'HOME', href: '/', icon: HomeIcon },
    { name: 'ABOUT', href: '/about', icon: BuildingOfficeIcon },
    { name: 'PRODUCTS', href: '/products', icon: CubeIcon },
    { name: 'SERVICES', href: '/services', icon: WrenchScrewdriverIcon },
    { name: 'GALLERY', href: '/gallery', icon: PhotoIcon },
    { name: 'CONTACT', href: '/contact', icon: PhoneIcon },
  ],
  products: [
    {
      name: 'Teak Wood',
      href: '/products/teak-wood',
    },
    {
      name: 'Non-Teak Wood',
      href: '/products/non-teak-wood',
    },
    {
      name: 'HDHMR',
      href: '/products/hdhmr',
    },
    {
      name: 'MDF',
      href: '/products/mdf',
    },
    {
      name: 'Ply and Board',
      href: '/products/ply-and-board',
      subItems: [
        { name: 'Flush Doors', href: '/products/ply-and-board/flush-doors' },
        { name: 'Veneers', href: '/products/ply-and-board/veneers' },
        { name: 'Acrylic Sheets/Panels', href: '/products/ply-and-board/acrylic' },
        { name: 'Laminates', href: '/products/ply-and-board/laminates' },
        { name: 'WPC Boards', href: '/products/ply-and-board/wpc' },
      ],
    },
    {
      name: 'Readymade Doors and Frames',
      href: '/products/readymade-doors',
    },
    {
      name: 'Mouldings',
      href: '/products/mouldings',
    },
    {
      name: 'Wood Panels',
      href: '/products/wood-panels',
    },
    {
      name: 'Fenesta UPVC and Aluminium',
      href: '/products/fenesta',
    },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11h8v2H8z"/>
                  <path d="M8 15h8v2H8z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-stone-800 tracking-tight">Mittal Timbers</span>
                <span className="text-xs text-amber-600 font-medium tracking-wider">ESTD 1998</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.main.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-2 text-sm font-medium text-stone-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                >
                  <Icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-800 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
          <div className="px-4 py-6 space-y-2">
            {navigation.main.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-stone-200">
              <Link
                href="/contact"
                className="flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-amber-700 hover:to-amber-800 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 