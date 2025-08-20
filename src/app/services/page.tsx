import Link from 'next/link'
import { TruckIcon, WrenchScrewdriverIcon, CubeIcon, BeakerIcon, ChatBubbleBottomCenterTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const mainServices = [
  {
    name: 'IMPORTS',
    description: 'We import varieties of timber according to different and varying requirements of clients. We import from various countries like Ghana, Panama, Benin, Ecuador, Ivory Coast, Malaysia, Brazil, Sudan etc.',
    icon: TruckIcon,
    features: ['Global Sourcing', 'Quality Assured', 'Custom Requirements'],
  },
  {
    name: 'SAW MILLING',
    description: 'We at Mittal Timbers use cutting edge machinery to cater to the need of our clients. This includes various vertical and horizontal saw machines and carpentry machines.',
    icon: WrenchScrewdriverIcon,
    features: ['Cutting-edge Machinery', 'Precision Cutting', 'Custom Dimensions'],
  },
  {
    name: 'FABRICATION',
    description: 'We fabricate many products ranging from doors and windows frames/shutters to small scale furniture as well.',
    icon: CubeIcon,
    features: ['Custom Fabrication', 'Furniture Making', 'Precision Work'],
  },
];

const additionalServices = [
  {
    name: 'Consultation',
    description: 'Our experts provide professional guidance on timber selection, project planning, and technical specifications to ensure the best results for your project.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Quality Control',
    description: 'We maintain strict quality control measures throughout our supply chain, ensuring that every product meets our high standards and your requirements.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Technical Support',
    description: 'Our technical team provides ongoing support and assistance for all your timber-related needs, from installation to maintenance.',
    icon: BeakerIcon,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin by understanding your requirements and project specifications through detailed consultation.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Our team develops a detailed plan and timeline for your project with precise specifications.',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'We implement the plan with precision and attention to detail using our advanced machinery.',
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'Every project undergoes thorough quality control and inspection before delivery.',
  },
];

export default function Services() {
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
              <span className="text-amber-400 font-bold text-sm tracking-wider">PROFESSIONAL</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              OUR <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">SERVICES</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive timber solutions tailored to your needs - from sourcing to final delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23A0522D" fill-opacity="0.1"><polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">CORE</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8">
              SERVICES
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of services designed to meet all your timber requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className={`animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-stone-100 hover:border-amber-200 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-6 group-hover:text-amber-700 transition-colors">{service.name}</h3>
                      <p className="text-stone-600 leading-relaxed text-lg mb-8 flex-1">{service.description}</p>
                      
                      <div className="space-y-3 mt-auto">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-stone-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.1"><circle cx="30" cy="30" r="3"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">ADDITIONAL</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8">
              SUPPORT SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-stone-100 hover:border-amber-200 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex-1 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">{service.name}</h3>
                      <p className="text-stone-600 leading-relaxed flex-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-700 font-semibold text-sm tracking-wide">OUR</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8">
              PROCESS
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures quality and efficiency in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-stone-100 hover:border-amber-200 relative overflow-hidden group h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed flex-1">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-8 h-1 bg-gradient-to-r from-amber-600 to-amber-700 transform translate-x-4 -translate-y-1/2"></div>
                )}
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
              Ready to Get <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Started?</span>
            </h3>
            <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your project requirements and discover how our comprehensive services can bring your vision to life.
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