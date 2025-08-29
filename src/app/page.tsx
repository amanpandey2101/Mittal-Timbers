import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { CubeIcon, WrenchScrewdriverIcon, TruckIcon } from '@heroicons/react/24/outline';


const services = [
  {
    name: 'IMPORTS',
    description: 'We import varieties of timber according to different and varying requirements of clients. We import from various countries like Ghana, Panama, Benin, Ecuador, Ivory Coast, Malaysia, Brazil, Sudan etc.',
    icon: TruckIcon,
  },
  {
    name: 'SAW MILLING',
    description: 'We at Mittal Timbers use cutting edge machinery to cater to the need of our clients. This includes various vertical and horizontal saw machines and carpentry machines.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'FABRICATION',
    description: 'We fabricate many products ranging from doors and windows frames/shutters to small scale furniture as well.',
    icon: CubeIcon,
  },
];

const stats = [
  { name: 'Years of Experience', value: '29+' },
  { name: 'Happy Customers', value: '1000+' },
  { name: 'Products Delivered', value: '50K+' },
  { name: 'Countries Sourced', value: '15+' },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative h-full py-28 flex items-center justify-center overflow-hidden">
        {/* Professional Wood Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-stone-800/75 to-stone-700/60 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="woodGrain" patternUnits="userSpaceOnUse" width="120" height="60"><path d="M0,30 Q30,10 60,30 T120,30" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.3"/><path d="M0,35 Q40,15 80,35 T120,35" stroke="%238B4513" stroke-width="0.3" fill="none" opacity="0.2"/></pattern><pattern id="rings" patternUnits="userSpaceOnUse" width="200" height="200"><circle cx="100" cy="100" r="20" stroke="%23654321" stroke-width="1" fill="none" opacity="0.1"/><circle cx="100" cy="100" r="40" stroke="%23654321" stroke-width="0.8" fill="none" opacity="0.08"/><circle cx="100" cy="100" r="60" stroke="%23654321" stroke-width="0.6" fill="none" opacity="0.06"/><circle cx="100" cy="100" r="80" stroke="%23654321" stroke-width="0.4" fill="none" opacity="0.04"/></pattern></defs><rect fill="%23654321" width="1920" height="1080"/><rect fill="url(%23woodGrain)" width="1920" height="1080"/><rect fill="url(%23rings)" width="1920" height="1080"/><g fill="%23A0522D" opacity="0.15"><ellipse cx="300" cy="200" rx="150" ry="80" transform="rotate(15 300 200)"/><ellipse cx="1200" cy="400" rx="200" ry="100" transform="rotate(-20 1200 400)"/><ellipse cx="800" cy="700" rx="180" ry="90" transform="rotate(25 800 700)"/></g></svg>')`
            }}
          />
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2B48C" fill-opacity="0.1"><circle cx="7" cy="7" r="1"/><circle cx="53" cy="53" r="1"/><circle cx="30" cy="30" r="1"/></g></svg>')`,
               }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Since 1995 Badge */}
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-400 font-bold text-sm tracking-wider">SINCE 1995</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
              WHERE <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">WOOD</span>
              <br className="block" />
              MEETS <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">LUXURY</span>
            </h1>
            
            <div className="space-y-3 mb-8">
              <p className="text-xl md:text-2xl text-amber-300 font-semibold tracking-wide">
                A one stop solution for all wooden work
              </p>
              <p className="text-lg md:text-xl text-stone-300 flex items-center justify-center gap-2">
                Where you can experience all Wood products
              </p>
            </div>
            
            <p className="text-sm md:text-lg text-stone-200 max-w-4xl mx-auto mb-8 leading-relaxed opacity-90">
              At Mittal Timbers, we put our customers at the heart of everything we do. We listen 
              and respond to their needs as we constantly strive to provide an intuitive and 
              memorable experience when using our products and interacting with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white md:px-10 px-8 py-3 rounded-xl font-semibold md:text-md text-sm hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 flex items-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">CONTACT US</span>
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link
                href="/products"
                className="border-2 border-white/80 text-white md:px-10 px-5 py-3 rounded-xl font-semibold md:text-md text-sm hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 flex items-center group hover:border-amber-400"
              >
                <span>VIEW PRODUCTS</span>
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-amber-400 to-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced About Section */}
      <div className="py-12 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/><circle cx="80" cy="20" r="1"/><circle cx="20" cy="80" r="1"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left text-center">
              <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-4 ">
                <span className="text-amber-700 font-semibold text-sm tracking-wide">ABOUT</span>
              </div>
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mt-2 mb-8 leading-tight">
                MITTAL TIMBERS
              </div>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p className="text-lg text-stone-700 font-medium mb-6">
                  Mittal Timbers specializes in heavy timbers and custom milling. We are creative, 
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
              
              {/* Key highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md border border-stone-100">
                  <div className="text-2xl font-bold text-amber-600">25+</div>
                  <div className="text-sm text-stone-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-stone-100">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-stone-600 font-medium">Countries Sourced</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
                  <div className="absolute inset-0 " />
                  {/* Professional wood texture overlay */}
                  <div className="absolute inset-0" >
                    <img src="/assets/landing-graphics/1@300x.png" alt="Mittal Timbers" className="w-full h-full object-cover" />
                  </div>
                  {/* <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"> */}
                    {/* <p className="text-2xl font-bold text-stone-800 mb-1">T Y RAO</p> */}
                    {/* <p className="text-amber-600 font-semibold text-sm tracking-wide">(MANAGING DIRECTOR)</p> */}
                  {/* </div> */}
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3">
                  <span className="font-bold text-lg">Since 1995</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23FFFFFF" fill-opacity="0.1"><path d="M0 40L40 0h40v40L40 80H0V40z"/></g></svg>')`,
             }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">{stat.value}</div>
                <div className="text-amber-100 font-semibold text-sm tracking-wide uppercase">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Products section */}
      {/* <div className="py-32 bg-gradient-to-br from-white via-stone-50 to-white relative">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.1"><circle cx="30" cy="30" r="3"/></g></svg>')`,
             }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">OUR</span>
            </div>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mt-2 mb-8 leading-tight">
              PRODUCTS
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Explore our premium selection of timber products, crafted with quality and precision for your construction and furniture needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProducts.map((product, index) => (
              <div key={product.name} className={`group hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
   
                    <div className="absolute inset-0 opacity-30" 
                         style={{
                           backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="40" height="20"><path d="M0,10 Q10,2 20,10 T40,10" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.8"/></pattern></defs><rect fill="url(%23grain)" width="200" height="120"/></svg>')`,
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
                  <div className="p-10 flex-1 flex flex-col">
                    <h4 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-stone-600 mb-8 leading-relaxed text-lg flex-1">{product.description}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.features.map((feature) => (
                        <span key={feature} className="flex items-center text-sm text-stone-700 bg-gradient-to-r from-stone-50 to-amber-50 px-4 py-2 rounded-full border border-stone-200 hover:border-amber-300 transition-colors">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </span>
                      ))}
                    </div>
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
      </div> */}

      {/* Enhanced Services section */}
      <div className="py-12 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23A0522D" fill-opacity="0.1"><polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">OUR</span>
            </div>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mt-2 mb-8">
              SERVICES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-stone-100 hover:border-amber-200 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-stone-900 mb-6 group-hover:text-amber-700 transition-colors">{service.name}</h4>
                      <p className="text-stone-600 leading-relaxed text-lg flex-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900  relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.3"><circle cx="60" cy="60" r="30" stroke="%23D2691E" stroke-width="1" fill="none"/><circle cx="60" cy="60" r="20" stroke="%23D2691E" stroke-width="0.5" fill="none"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-0 md:py-5 py-5 text-center relative flex items-center gap-10 md:flex-row flex-col">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-amber-400 font-semibold text-sm tracking-wider">GET STARTED</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Project?</span>
            </h3>
            <p className="text-md text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our experts today and let us help you find the perfect timber solution for your needs. 
              Experience the difference that quality and craftsmanship can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-5 py-3 rounded-xl font-bold text-md hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Get Quote</span>
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-white/80 text-white px-5 py-3 rounded-xl font-bold text-lmd hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-amber-400"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div>
            <img src="/assets/landing-graphics/4@300x.png" alt="Mittal Timbers" className="md:w-[30vw]  h-full object-cover"/>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">PRODUCT SPECIALIZATIONS</span>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-6">Specialist in NAGPUR TEAK</h3>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto">PRODUCT DEALING WITH: NAGPUR TEAK • IMPORTED TEAK • SAAL • CHAMP • MERANDI • FENESTA (UPVC AND ALUMINIUM) • VENNER • PLYWOOD - all thickness plywood & flush door</p>
          </div>
          
          {/* Main Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                name: 'NAGPUR TEAK',
                description: 'Our Nagpur Teak is a well known name in the Indian market offering premium quality with reliability. High Strength, Termite free, Very beautiful grains in every piece of wood.',
                image: '/assets/product-graphics/nagpur_teak.jpg',
                features: ['High Strength', 'Termite free', 'Beautiful grains']
              },
              { 
                name: 'IVORY COAST TEAK',
                description: 'Premium imported teak with exceptional durability and stunning natural patterns.',
                image: '/assets/landing-graphics/2@300x.png',
                features: ['Imported Quality', 'Durable', 'Premium Grade']
              },
              { 
                name: 'PLYWOOD & FLUSH DOORS',
                description: 'All thickness plywood & flush doors from associated brands: Green, Century, Duro, Merino.',
                image: '/assets/landing-graphics/3@300x.png',
                features: ['All Thickness', 'Top Brands', 'Quality Assured']
              },
              { 
                name: 'VENEER COLLECTION',
                description: 'Wide range of veneer species available for all your decorative and functional needs.',
                image: '/assets/landing-graphics/4@300x.png',
                features: ['Wide Range', 'Premium Species', 'Custom Options']
              },
              { 
                name: 'FENESTA UPVC',
                description: 'Channel partner for FENESTA UPVC & ALUMINIUM doors & windows and premium wooden doors.',
                image: '/assets/landing-graphics/5@300x.png',
                features: ['UPVC & Aluminium', 'Premium Doors', 'Windows']
              },
              { 
                name: 'CHAMP & MERANTI',
                description: 'High-quality CHAMP and MERANTI wood varieties for diverse construction needs.',
                image: '/assets/product-graphics/product-graphics/22/DSC04710.JPG',
                features: ['Quality Wood', 'Construction Grade', 'Versatile Use']
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-stone-100 hover:border-amber-200 h-full flex flex-col">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-stone-600 mb-3 leading-relaxed flex-1">{product.description}</p>
                  <div className="space-y-2 mb-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-stone-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/products" 
                    className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/link mt-auto"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Associated Brands */}
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-stone-800 mb-6">ASSOCIATED BRANDS</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Green', 'Century', 'Duro', 'Merino'].map((brand) => (
                <div key={brand} className="bg-white rounded-xl px-6 py-4 shadow-lg border border-stone-200 hover:border-amber-200 transition-colors">
                  <span className="text-stone-700 font-semibold text-lg">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">GET BEST DISCOUNT & BEST PRICE</h4>
              <p className="text-xl mb-6">Share your requirements with us</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919318483152" 
                  className="bg-white text-amber-700 px-8 py-3 rounded-xl font-bold hover:bg-stone-50 transition-colors"
                >
                  SAKSHAM MITTAL : +91 9318483152
                </a>
                <a 
                  href="tel:+919811424164" 
                  className="bg-white text-amber-700 px-8 py-3 rounded-xl font-bold hover:bg-stone-50 transition-colors"
                >
                  RAJESH MITTAL : +91 9811424164
                </a>
              </div>
            </div>
          </div>
          
          {/* Video Reel Section */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">WATCH OUR WORK</span>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-6">See Us In Action</h3>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 h-[70vh]">
              <video 
                controls 
                className="w-full h-full object-fit"
                poster="/assets/landing-graphics/1@300x.png"
              >
                <source src="/assets/Reels/Reel1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
