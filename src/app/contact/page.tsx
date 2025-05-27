'use client'
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+91 9177172277, +91 9848871244',
    href: 'tel:+919177172277',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'sales@mittaltimbertraders.in',
    href: 'mailto:sales@mittaltimbertraders.in',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: 'Bunglow No. 179, NH-44, Medchal Road, Near Cantonment Check Post, Old Bowenpally, Secunderabad, Telangana, 500011',
    href: 'https://maps.google.com/?q=Bunglow+No.+179+NH-44+Medchal+Road+Secunderabad',
  },
  {
    icon: ClockIcon,
    label: 'Business Hours',
    value: 'Monday - Saturday: 9:30 AM - 6:00 PM\nSunday: Closed',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-800 to-stone-900 py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            CONTACT <span className="text-amber-400">US</span>
          </h1>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
            Our depot is located in the heart of Hyderabad city. The office opens at 9:30 AM and closes at 6:00 PM.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3">{item.label}</h3>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-stone-600 hover:text-amber-600 transition-colors leading-relaxed block"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.value.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </a>
                  ) : (
                    <p className="text-stone-600 leading-relaxed">
                      {item.value.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.value.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Get in Touch</h2>
                <h3 className="text-4xl font-bold text-stone-900 mt-2 mb-6">Fill in the form.</h3>
                <p className="text-xl text-stone-600 leading-relaxed">
                  We will reach out to you!
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">GSTN</h4>
                    <p className="text-stone-600 font-mono">36AAFFT8892A1ZX</p>
                  </div>
                </div>
                
                <div className="border-t border-stone-200 pt-6">
                  <h4 className="font-semibold text-stone-900 mb-4">Why Choose Mittal Timbers?</h4>
                  <ul className="space-y-3">
                    {[
                      'Premium quality timber products',
                      'Custom milling services',
                      '25+ years of experience',
                      'Competitive pricing',
                      'Reliable delivery',
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-stone-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-stone-100">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
                    1. Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your answer"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">
                    2. Your Phone Number or Email Address *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your answer"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">Find Us</h3>
            <p className="text-stone-600">Visit our depot in Secunderabad, Telangana</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] bg-stone-200 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-stone-600 font-medium">Interactive Map</p>
                <p className="text-stone-500 text-sm">Bunglow No. 179, NH-44, Medchal Road</p>
                <a 
                  href="https://maps.google.com/?q=Bunglow+No.+179+NH-44+Medchal+Road+Secunderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 