import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { CubeIcon, WrenchScrewdriverIcon, TruckIcon } from '@heroicons/react/24/outline';

const featuredProducts = [
  {
    name: 'Teak Wood Cut Sizes',
    category: 'TEAK',
    description: 'Premium quality teak wood cut to your exact specifications. Perfect for furniture and construction.',
    href: '/products/teak-wood',
    imageSrc: '/images/teak-wood.jpg',
    features: ['Premium Quality', 'Custom Sizes', 'Seasoned Wood'],
  },
  {
    name: 'Hard Wood Cut Sizes',
    category: 'HARD',
    description: 'Durable hardwood varieties for heavy-duty applications and long-lasting projects.',
    href: '/products/hard-wood',
    imageSrc: '/images/hard-wood.jpg',
    features: ['High Durability', 'Multiple Species', 'Precision Cut'],
  },
  {
    name: 'Rough Square',
    category: 'TEAK AND HARD',
    description: 'Raw timber in rough square format, ideal for custom milling and specialized projects.',
    href: '/products/rough-square',
    imageSrc: '/images/rough-square.jpg',
    features: ['Raw Material', 'Bulk Available', 'Cost Effective'],
  },
  {
    name: 'Door Frames',
    category: 'DOORS',
    description: 'Ready-made door frames crafted with precision for residential and commercial use.',
    href: '/products/door-frames',
    imageSrc: '/images/door-frames.jpg',
    features: ['Ready to Install', 'Standard Sizes', 'Quality Finish'],
  },
];

const services = [
  {
    name: 'IMPORTS',
    description: 'We import varieties of timber according to different and varying requirements of clients. We import from various countries like Ghana, Panama, Benin, Ecuador, Ivory Coast, Malaysia, Brazil, Sudan etc.',
    icon: TruckIcon,
  },
  {
    name: 'SAW MILLING',
    description: 'We at Timber India use cutting edge machinery to cater to the need of our clients. This includes various vertical and horizontal saw machines and carpentry machines.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'FABRICATION',
    description: 'We fabricate many products ranging from doors and windows frames/shutters to small scale furniture as well.',
    icon: CubeIcon,
  },
];

const stats = [
  { name: 'Years of Experience', value: '25+' },
  { name: 'Happy Customers', value: '1000+' },
  { name: 'Products Delivered', value: '50K+' },
  { name: 'Countries Sourced', value: '15+' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-800/60 to-transparent z-10" />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23654321" width="1200" height="800"/><g fill="%23A0522D"><circle cx="200" cy="200" r="100"/><circle cx="800" cy="300" r="80"/><circle cx="1000" cy="600" r="120"/><rect x="300" y="400" width="200" height="150" rx="20"/><rect x="600" y="100" width="180" height="200" rx="15"/></g></svg>')`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              WE <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">LISTEN</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              At Timber India, we put our customers at the heart of everything we do. We listen 
              and respond to their needs as we constantly strive to provide an intuitive and 
              memorable experience when using our products and interacting with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 flex items-center group"
              >
                CONTACT US
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-stone-800 transition-all duration-300 flex items-center group"
              >
                VIEW PRODUCTS
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">About</h2>
              <h3 className="text-4xl font-bold text-stone-900 mt-2 mb-6">TIMBER INDIA</h3>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Timber India specializes in heavy timbers and custom milling. We are creative, 
                  our sawyers and planers and fabricators can make almost anything out of 
                  wood. We can cut and mill the entire order and package it for you.
                </p>
                <p>
                  We have supplied our products to wholesale and retail lumber yards. Most 
                  importantly, no order is too large or too small. More often than not our orders for 
                  lumber yards are for two, five, or twenty pieces of an item not readily available, if 
                  at all, from other suppliers.
                </p>
                <p>
                  Working closely with architects, builders, joiners, furniture makers and timber 
                  framers, we provide a professional yet personal service tailored to the unique 
                  needs and wishes of our clients.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-2xl font-bold text-stone-800">T Y RAO (MD)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-amber-100 font-medium">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Our</h2>
            <h3 className="text-4xl font-bold text-stone-900 mt-2 mb-6">PRODUCTS</h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Explore our premium selection of timber products, crafted with quality and precision for your construction and furniture needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.name} className={`group hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 hover:border-amber-200 transition-all duration-300">
                  <div className="aspect-[16/10] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-stone-600 mb-6 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature) => (
                        <span key={feature} className="flex items-center text-sm text-stone-600 bg-stone-50 px-3 py-1 rounded-full">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 group-hover:translate-x-1 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Our</h2>
            <h3 className="text-4xl font-bold text-stone-900 mt-2 mb-6">SERVICES</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-stone-900 mb-4">{service.name}</h4>
                    <p className="text-stone-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today and let us help you find the perfect timber solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Quote
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-stone-800 transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
