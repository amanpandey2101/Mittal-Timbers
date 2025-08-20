import Link from 'next/link'
import { ArrowRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-white via-stone-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Professional background texture */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/><circle cx="80" cy="20" r="1"/><circle cx="20" cy="80" r="1"/></g></svg>')`,
           }}
      />
      
      <div className="max-w-3xl text-center relative animate-fade-in-up">
        {/* Error illustration */}
        <div className="mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-stone-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" 
                 style={{
                   backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><pattern id="notFoundWood" patternUnits="userSpaceOnUse" width="32" height="16"><path d="M0,8 Q8,2 16,8 T32,8" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.6"/></pattern></defs><rect fill="url(%23notFoundWood)" width="128" height="128"/></svg>')`,
                 }}
            />
            <span className="text-6xl">🪵</span>
          </div>
          <div className="text-8xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-4">
            404
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
            Page not found
          </h1>
                     <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
             Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back to exploring our premium timber products.
           </p>
          
          <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-2 mt-8">
            <span className="text-amber-700 font-semibold text-sm md:tracking-wide">SINCE 1995 - WHERE WOOD MEETS LUXURY</span>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 flex items-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <HomeIcon className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10">Go back home</span>
          </Link>
          
          <Link 
            href="/contact" 
            className="border-2 border-stone-300 text-stone-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300 flex items-center group"
          >
            Contact support 
            <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Additional navigation */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <p className="text-stone-500 mb-6">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">Products</Link>
            <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">Services</Link>
            <Link href="/about" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">About</Link>
            <Link href="/gallery" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  )
} 