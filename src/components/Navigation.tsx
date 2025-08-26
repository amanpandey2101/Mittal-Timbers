'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HomeIcon, BuildingOfficeIcon, CubeIcon, WrenchScrewdriverIcon, PhotoIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

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

  return (
    <nav className="bg-white/98 backdrop-blur-xl border-b border-stone-200/80 sticky top-0 z-50 shadow-lg shadow-stone-900/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center py-2">
          <Link href="/" className="flex items-center space-x-4 group">
            <Image src="/assets/logo.png" alt="Mittal Timbers Logo" width={80} height={80} />
          </Link>
        </div>

        {/* Navigation Items Section */}
        <div className="relative py-1">
          {/* Desktop Navigation + Contact inline and centered */}
          <div className="hidden lg:flex items-center justify-center gap-2">
            {navigation.main.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-5 py-3 text-sm font-semibold text-stone-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 rounded-xl transition-all duration-300 relative overflow-hidden"
                >
                  <Icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  {item.name}
                </Link>
              );
            })}
         
          </div>

          {/* Mobile menu button pinned right */}
          <div className="lg:hidden absolute left-0 bottom-1/2 -translate-y-1/2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-3 text-stone-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-amber-700 transition-all duration-300"
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

      {/* Enhanced Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-stone-200 shadow-2xl">
          <div className="px-6 py-8 space-y-3">
            {navigation.main.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-5 py-4 text-base font-semibold text-stone-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-6 mt-6 border-t border-stone-200">
              <Link
                href="/contact"
                className="flex items-center justify-center bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-8 py-4 rounded-xl font-bold text-sm hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transition-all duration-300 shadow-xl"
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