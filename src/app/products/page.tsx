import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const products = [
  {
    name: 'Teak Wood',
    description: 'Premium quality teak wood for furniture and construction. Known for its durability, natural beauty, and resistance to moisture.',
    href: '/products/teak-wood',
    imageSrc: '/images/teak-wood.jpg',
    category: 'PREMIUM',
    features: ['Premium Quality', 'Moisture Resistant', 'Long Lasting'],
  },
  {
    name: 'Non-Teak Wood',
    description: 'High-quality non-teak wood options for various applications. Perfect for construction and decorative purposes.',
    href: '/products/non-teak-wood',
    imageSrc: '/images/non-teak-wood.jpg',
    category: 'VERSATILE',
    features: ['Multiple Species', 'Cost Effective', 'Versatile Use'],
  },
  {
    name: 'HDHMR',
    description: 'High Density High Moisture Resistant boards for superior durability. Ideal for high-moisture environments.',
    href: '/products/hdhmr',
    imageSrc: '/images/hdhmr.jpg',
    category: 'ENGINEERED',
    features: ['High Density', 'Moisture Resistant', 'Superior Strength'],
  },
  {
    name: 'MDF',
    description: 'Medium-Density Fibreboard for versatile applications. Perfect for furniture making and interior design.',
    href: '/products/mdf',
    imageSrc: '/images/mdf.jpg',
    category: 'ENGINEERED',
    features: ['Smooth Finish', 'Easy to Work', 'Consistent Quality'],
  },
  {
    name: 'Ply and Board',
    description: 'Complete range of plywood and board solutions for all your construction and furniture needs.',
    href: '/products/ply-and-board',
    imageSrc: '/images/ply-board.jpg',
    category: 'COMPOSITE',
    features: ['Wide Range', 'Quality Assured', 'Multiple Sizes'],
  },
  {
    name: 'Readymade Doors and Frames',
    description: 'Premium quality doors and frames ready for installation. Available in various designs and sizes.',
    href: '/products/readymade-doors',
    imageSrc: '/images/doors.jpg',
    category: 'READY-TO-USE',
    features: ['Ready to Install', 'Multiple Designs', 'Quality Finish'],
  },
  {
    name: 'Mouldings',
    description: 'Decorative and functional mouldings for interior design. Add elegance to your spaces.',
    href: '/products/mouldings',
    imageSrc: '/images/mouldings.jpg',
    category: 'DECORATIVE',
    features: ['Custom Profiles', 'Decorative', 'Precision Cut'],
  },
  {
    name: 'Wood Panels',
    description: 'High-quality wood panels for various applications. Perfect for wall cladding and decorative purposes.',
    href: '/products/wood-panels',
    imageSrc: '/images/panels.jpg',
    category: 'DECORATIVE',
    features: ['Natural Beauty', 'Easy Installation', 'Durable'],
  },
  {
    name: 'Fenesta UPVC and Aluminium',
    description: 'Modern window and door solutions with superior performance and energy efficiency.',
    href: '/products/fenesta',
    imageSrc: '/images/fenesta.jpg',
    category: 'MODERN',
    features: ['Energy Efficient', 'Low Maintenance', 'Modern Design'],
  },
]

const categories = [
  { name: 'All Products', value: 'all' },
  { name: 'Premium Wood', value: 'premium' },
  { name: 'Engineered Boards', value: 'engineered' },
  { name: 'Ready-to-Use', value: 'ready' },
  { name: 'Decorative', value: 'decorative' },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="woodGrain" patternUnits="userSpaceOnUse" width="120" height="60"><path d="M0,30 Q30,10 60,30 T120,30" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.3"/></pattern></defs><rect fill="url(%23woodGrain)" width="1920" height="1080"/></svg>')`,
             }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-amber-400 font-bold text-sm tracking-wider">ALL 🪵 PRODUCTS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              OUR <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">PRODUCTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of premium timber products, crafted with quality and precision for your construction and furniture needs.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-16 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                className="bg-white text-stone-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-stone-200 hover:border-amber-600"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-32 bg-gradient-to-br from-white via-stone-50 to-white relative">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.1"><circle cx="30" cy="30" r="3"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={product.name} className={`group hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                    {/* Wood texture overlay */}
                    <div className="absolute inset-0 opacity-30" 
                         style={{
                           backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"><defs><pattern id="grain${index}" patternUnits="userSpaceOnUse" width="40" height="20"><path d="M0,10 Q10,2 20,10 T40,10" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.8"/></pattern></defs><rect fill="url(%23grain${index})" width="200" height="120"/></svg>')`,
                         }}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-2xl">🪵</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-stone-600 mb-6 leading-relaxed text-lg flex-1">{product.description}</p>
                    
                    {product.features && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature) => (
                          <span key={feature} className="flex items-center text-sm text-stone-700 bg-gradient-to-r from-stone-50 to-amber-50 px-3 py-1 rounded-full border border-stone-200 hover:border-amber-300 transition-colors">
                            <CheckCircleIcon className="w-3 h-3 text-green-500 mr-1" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      href={product.href}
                      className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 group-hover:translate-x-2 transition-all duration-300 text-lg mt-auto"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.3"><circle cx="60" cy="60" r="30" stroke="%23D2691E" stroke-width="1" fill="none"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Need a <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Custom Solution?</span>
            </h3>
            <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our experts are ready to help you find the perfect timber products for your specific requirements. Contact us for personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Get Custom Quote</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/80 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-amber-400"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 