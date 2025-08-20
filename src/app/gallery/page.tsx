import Link from 'next/link'
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/24/solid';

const galleryItems = [
  {
    id: 1,
    title: 'Teak Wood Collection',
    description: 'Premium teak wood products showcasing natural beauty and durability. Perfect for luxury furniture and construction projects.',
    category: 'Products',
    imageSrc: '/images/gallery/teak-collection.jpg',
  },
  {
    id: 2,
    title: 'Modern Furniture Projects',
    description: 'Contemporary furniture pieces crafted from our premium timber products. Showcasing the versatility of our materials.',
    category: 'Projects',
    imageSrc: '/images/gallery/modern-furniture.jpg',
  },
  {
    id: 3,
    title: 'Interior Solutions',
    description: 'Complete interior solutions using our range of timber products. From flooring to wall paneling.',
    category: 'Projects',
    imageSrc: '/images/gallery/interior-solutions.jpg',
  },
  {
    id: 4,
    title: 'HDHMR Applications',
    description: 'High Density High Moisture Resistant boards in various applications. Ideal for high-moisture environments.',
    category: 'Products',
    imageSrc: '/images/gallery/hdhmr-applications.jpg',
  },
  {
    id: 5,
    title: 'Custom Milling Projects',
    description: 'Showcasing our custom milling capabilities and precision. From rough lumber to finished products.',
    category: 'Services',
    imageSrc: '/images/gallery/custom-milling.jpg',
  },
  {
    id: 6,
    title: 'Wood Panels Collection',
    description: 'Our premium wood panels in various finishes and applications. Natural beauty meets functionality.',
    category: 'Products',
    imageSrc: '/images/gallery/wood-panels.jpg',
  },
  {
    id: 7,
    title: 'Commercial Projects',
    description: 'Large-scale commercial projects featuring our timber products. Quality that stands the test of time.',
    category: 'Projects',
    imageSrc: '/images/gallery/commercial-projects.jpg',
  },
  {
    id: 8,
    title: 'Fenesta Solutions',
    description: 'Modern window and door solutions for contemporary spaces. Energy-efficient and aesthetically pleasing.',
    category: 'Products',
    imageSrc: '/images/gallery/fenesta-solutions.jpg',
  },
  {
    id: 9,
    title: 'Heritage Restoration',
    description: 'Restoration projects using traditional timber techniques. Preserving history with quality materials.',
    category: 'Projects',
    imageSrc: '/images/gallery/heritage-restoration.jpg',
  },
]

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Products', value: 'products' },
  { name: 'Projects', value: 'projects' },
  { name: 'Services', value: 'services' },
];

export default function Gallery() {
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
              <span className="text-amber-400 font-bold text-sm tracking-wider">SHOWCASE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              OUR <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">GALLERY</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of premium timber products and successful projects - where craftsmanship meets excellence.
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
                className="bg-white text-stone-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-stone-200 hover:border-amber-600 hover:scale-105"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-32 bg-gradient-to-br from-white via-stone-50 to-white relative">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.1"><circle cx="30" cy="30" r="3"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item, index) => (
              <div key={item.id} className={`group animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover-lift h-full flex flex-col">
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    {/* Wood texture overlay */}
                    <div className="absolute inset-0 opacity-40" 
                         style={{
                           backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><defs><pattern id="galleryGrain${index}" patternUnits="userSpaceOnUse" width="40" height="20"><path d="M0,10 Q10,2 20,10 T40,10" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.8"/></pattern></defs><rect fill="url(%23galleryGrain${index})" width="200" height="150"/></svg>')`,
                         }}
                    />
                    
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <EyeIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-stone-600 leading-relaxed text-lg mb-6 flex-1">{item.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-amber-600 font-bold text-lg">View Details</span>
                      <ArrowRightIcon className="w-6 h-6 text-amber-600 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
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
              Interested in Our <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Products?</span>
            </h3>
            <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us to learn more about our products and discover how they can elevate your next project to new heights of quality and beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Contact Us</span>
              </Link>
              <Link
                href="/products"
                className="border-2 border-white/80 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-amber-400"
              >
                View Products <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 