import { CheckCircleIcon, SparklesIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const values = [
  {
    name: 'Quality Excellence',
    description: 'We are committed to providing only the highest quality timber products, sourced from sustainable forests and processed with precision using cutting-edge machinery.',
    icon: SparklesIcon,
  },
  {
    name: 'Sustainability',
    description: 'Our commitment to environmental responsibility drives us to source timber from sustainable forests and implement eco-friendly practices throughout our operations.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Customer Focus',
    description: 'We prioritize our customers needs, providing expert guidance and support to help them find the perfect timber solutions for their projects.',
    icon: UserGroupIcon,
  },
];

const achievements = [
  {
    name: 'Years of Excellence',
    value: '29+',
    description: 'Serving customers since 1995',
  },
  {
    name: 'Countries Sourced',
    value: '15+',
    description: 'Global timber sourcing network',
  },
  {
    name: 'Happy Customers',
    value: '1000+',
    description: 'Satisfied clients nationwide',
  },
  {
    name: 'Products Delivered',
    value: '50K+',
    description: 'Successful deliveries',
  },
];

const milestones = [
  { year: '1995', event: 'Company founded by T Y Rao with a vision to provide premium timber solutions' },
  { year: '2000', event: 'Expanded operations and established our first major milling facility' },
  { year: '2005', event: 'Began international timber sourcing from 8+ countries' },
  { year: '2010', event: 'Introduced custom milling and fabrication services' },
  { year: '2015', event: 'Launched comprehensive product range including HDHMR and MDF' },
  { year: '2020', event: 'Digital transformation and enhanced customer service capabilities' },
  { year: '2024', event: 'Celebrating 29 years of excellence with expanded product portfolio' },
];

export default function About() {
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
              <span className="text-amber-400 font-bold text-sm tracking-wider">SINCE 1995</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              ABOUT <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">US</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner for premium timber solutions - where wood meets luxury and craftsmanship meets innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-32 bg-gradient-to-br from-white via-stone-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-700 font-semibold text-sm tracking-wide">OUR STORY</span>
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8 leading-tight">
                MITTAL TIMBERS
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p className="text-xl text-stone-700 font-medium">
                  Founded in 1995, Mittal Timbers has grown from a small family business to one of the leading timber
                  suppliers in the region. Our commitment to quality and customer satisfaction has been the cornerstone
                  of our success.
                </p>
                <p>
                  Over the years, we have expanded our product range and services while maintaining the highest standards
                  of quality and reliability. Today, we serve customers across the country with a comprehensive range of
                  timber products and solutions.
                </p>
                <p>
                  Mittal Timbers specializes in heavy timbers and custom milling. We are creative, 
                  our sawyers and planers and fabricators can make almost anything out of 
                  wood. We can cut and mill the entire order and package it for you.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-stone-800/10" />
                  <div className="absolute inset-0 opacity-30" 
                       style={{
                         backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><pattern id="wood" patternUnits="userSpaceOnUse" width="80" height="40"><path d="M0,20 Q20,5 40,20 T80,20" stroke="%23A0522D" stroke-width="0.8" fill="none" opacity="0.6"/></pattern></defs><rect fill="url(%23wood)" width="400" height="300"/></svg>')`,
                       }}
                  />
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <p className="text-2xl font-bold text-stone-800 mb-1">T Y RAO</p>
                    <p className="text-amber-600 font-semibold text-sm tracking-wide">(MANAGING DIRECTOR)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23FFFFFF" fill-opacity="0.1"><path d="M0 40L40 0h40v40L40 80H0V40z"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-xl text-amber-100">Building trust through consistent excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">{achievement.value}</div>
                <div className="text-amber-100 font-semibold text-sm tracking-wide uppercase mb-2">{achievement.name}</div>
                <div className="text-amber-200 text-xs">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 relative overflow-hidden">
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
            <h3 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8">
              VALUES
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at Mittal Timbers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-stone-100 hover:border-amber-200 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-stone-900 mb-6 group-hover:text-amber-700 transition-colors">{value.name}</h4>
                      <p className="text-stone-600 leading-relaxed text-lg flex-1">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-32 bg-white relative overflow-hidden">
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
            <h3 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-8">
              JOURNEY
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Nearly three decades of growth, innovation, and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-3xl font-bold text-amber-600 mb-3">{milestone.year}</div>
                      <p className="text-stone-700 leading-relaxed text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-700 font-semibold text-sm tracking-wide">OUR MISSION</span>
              </div>
              <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">
                Delivering Excellence in Every Project
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p className="text-xl text-stone-700 font-medium">
                  To provide our customers with the highest quality timber products while maintaining sustainable
                  practices and contributing positively to the environment and society.
                </p>
                <p>
                  We believe in building lasting relationships with our clients through exceptional service, 
                  innovative solutions, and unwavering commitment to quality. Every piece of timber we deliver 
                  represents our dedication to craftsmanship and excellence.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative">
                  <TrophyIcon className="w-16 h-16 text-amber-200 mb-8" />
                  <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-200 flex-shrink-0" />
                      <span className="text-lg">Premium quality guaranteed</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-200 flex-shrink-0" />
                      <span className="text-lg">Custom solutions available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-200 flex-shrink-0" />
                      <span className="text-lg">Sustainable sourcing practices</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-200 flex-shrink-0" />
                      <span className="text-lg">Expert technical support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
              Ready to Experience <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Quality?</span>
            </h3>
            <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have chosen Mittal Timbers for their premium timber needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Start Your Project</span>
              </Link>
              <Link
                href="/products"
                className="border-2 border-white/80 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-amber-400"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 