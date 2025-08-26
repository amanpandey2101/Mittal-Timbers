'use client'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';


const contactInfo = [
  {
    label: 'Phone',
    value: '+91 9318483152\n+91 9811424164',
    href: 'tel:+919318483152',
    icon: PhoneIcon,
  },
  {
    label: 'Email',
    value: 'contact@mittaltimbers.com',
    href: 'mailto:contact@mittaltimbers.com',
    icon: EnvelopeIcon,
  },
  {
    label: 'Address',
    value: 'H-36/27 DLF PHASE-1\nGURGAON\nMITTAL TIMBER TRADERS',
    icon: MapPinIcon,
  },
  {
    label: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 5:00 PM',
    icon: ClockIcon,
  },
];

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    

  //   await new Promise(resolve => setTimeout(resolve, 1000));
    
  //   setIsSubmitting(false);
  //   setIsSubmitted(true);
  //   setFormData({ name: '', email: '', phone: '', message: '' });
    

  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="woodGrain" patternUnits="userSpaceOnUse" width="120" height="60"><path d="M0,30 Q30,10 60,30 T120,30" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.3"/></pattern></defs><rect fill="url(%23woodGrain)" width="1920" height="1080"/></svg>')`,
             }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 md:px-6 md:py-2 mb-4 md:mb-8">
              <span className="text-amber-400 font-bold text-xs md:text-sm tracking-wider">GET IN TOUCH</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
              CONTACT <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">US</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed px-4">
              Our depot is located in DLF Phase-1, Gurgaon. Experience premium timber solutions since 1995.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl md:shadow-2xl border border-stone-100 hover:border-amber-200 relative overflow-hidden group hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 md:mb-4">Get In Touch</h2>
                  <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2">
                    Dear customers, We have a wide range of wood varieties having specialisation in NAGPUR TEAK, plywood, flush door, frames, veeners etc. Contact us through any of the channels below.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start space-x-3 md:space-x-4 group/item">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2 md:mb-3 group-hover/item:text-amber-700 transition-colors">
                            {item.label}
                          </h3>
                          
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-stone-600 hover:text-amber-600 transition-colors block text-sm md:text-lg leading-relaxed"
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
                            <p className="text-stone-600 leading-relaxed text-sm md:text-lg">
                              {item.value.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  {index < item.value.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-stone-200 text-center">
                  <p className="text-stone-500 text-base md:text-lg mb-3 md:mb-4">
                    Experience where wood meets luxury since 1995
                  </p>
                  <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 md:px-6 md:py-3">
                    <span className="text-amber-700 font-semibold text-xs md:text-sm tracking-wide">
                      SINCE 1995 - WHERE WOOD MEETS LUXURY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      {/* <div className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.1"><circle cx="30" cy="30" r="3"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            

            <div className="space-y-8 animate-fade-in-left">
              <div>
                <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                  <span className="text-amber-700 font-semibold text-sm tracking-wide">GET IN TOUCH</span>
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mt-2 mb-8 leading-tight">
                  Fill in the form.
                </h3>
                <p className="text-2xl text-amber-600 font-semibold mb-4">
                  We will reach out to you!
                </p>
                <p className="text-lg text-stone-600">
                  Experience where wood meets luxury since 1995
                </p>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-10 space-y-8 shadow-xl border border-stone-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">GSTN</h4>
                    <p className="text-stone-700 font-mono text-lg">36AAFFT8892A1ZX</p>
                  </div>
                </div>
                
                <div className="border-t border-stone-300 pt-8">
                  <h4 className="font-bold text-stone-900 mb-6 text-xl">Why Choose Mittal Timbers?</h4>
                  <ul className="space-y-4">
                    {[
                      'Premium quality timber products',
                      'Custom milling services',
                      '29+ years of experience since 1995',
                      'Competitive pricing',
                      'Reliable delivery',
                      'Global sourcing network',
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-stone-700 text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

         
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-stone-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent"></div>
                <div className="relative">
                  {isSubmitted && (
                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                        <p className="text-green-800 font-semibold text-lg">Thank you! Your message has been sent successfully.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-stone-900 mb-3">
                        1. Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-stone-900 mb-3">
                        2. Your Phone Number or Email Address *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your contact details"
                        className="w-full px-6 py-4 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-stone-900 mb-3">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-lg bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-stone-900 mb-3">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-6 py-4 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none text-lg bg-stone-50 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Map Section */}
      <div className="bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23A0522D" fill-opacity="0.1"><polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/></g></svg>')`,
             }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 md:px-6 md:py-2 mb-4 md:mb-6">
              <span className="text-amber-700 font-semibold text-xs md:text-sm tracking-wide">VISIT US</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent mb-4 md:mb-6">Find Us</h3>
            <p className="text-lg md:text-xl text-stone-600 px-4">Visit our depot in DLF Phase-1, Gurgaon</p>
          </div>
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-stone-200 animate-fade-in-up">
            <div className="w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.993357956337!2d77.09308867668105!3d28.479746675748384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192b8779c2b5%3A0xf3c154d91072aac8!2sMittal%20Timber%20Traders!5e0!3m2!1sen!2sin!4v1756046321796!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 