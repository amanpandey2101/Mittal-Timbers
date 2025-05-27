import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
  'aria-hidden'?: boolean;
}

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Teak Wood Cut Sizes', href: '/products/teak-wood' },
    { name: 'Hard Wood Cut Sizes', href: '/products/hard-wood' },
    { name: 'Rough Square', href: '/products/rough-square' },
    { name: 'Door Frames', href: '/products/door-frames' },
    { name: 'HDHMR', href: '/products/hdhmr' },
    { name: 'MDF', href: '/products/mdf' },
    { name: 'Ply and Board', href: '/products/ply-and-board' },
    { name: 'Readymade Doors', href: '/products/readymade-doors' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ],
};

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+91 9177172277, +91 9848871244',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'sales@timberindia.in',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: 'Bunglow No. 179, NH-44, Medchal Road, Near Cantonment Check Post, Old Bowenpally, Secunderabad, Telangana, 500011',
  },
  {
    icon: ClockIcon,
    label: 'Hours',
    value: 'Mon-Sat: 9:30 AM - 6:00 PM',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11h8v2H8z"/>
                  <path d="M8 15h8v2H8z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">Mittal Timbers</span>
                <span className="text-xs text-amber-400 font-medium tracking-wider">ESTD 1998</span>
              </div>
            </Link>
            <p className="text-stone-300 leading-relaxed">
              Your trusted partner for premium timber solutions. Specializing in heavy timbers and custom milling with over 25 years of experience.
            </p>
            <div className="bg-stone-800/50 rounded-lg p-4 border border-stone-700">
              <p className="text-amber-400 font-semibold mb-2">GSTN</p>
              <p className="text-stone-300 text-sm font-mono">36AAFFT8892A1ZX</p>
            </div>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all duration-200 group"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden={true} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-amber-600 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-stone-300 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-stone-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-amber-600 rounded-full mr-3"></span>
              Our Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-stone-300 hover:text-amber-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-stone-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              href="/products" 
              className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium mt-4 group"
            >
              View All Products
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-amber-600 rounded-full mr-3"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-amber-400 font-medium text-sm">{item.label}</p>
                      <p className="text-stone-300 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              &copy; {new Date().getFullYear()} Mittal Timbers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-stone-400">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 