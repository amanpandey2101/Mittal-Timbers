export default function Loading() {
  return (
    <div className="bg-gradient-to-br from-white via-stone-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Professional background texture */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="%23654321"><circle cx="20" cy="20" r="2"/><circle cx="80" cy="80" r="2"/><circle cx="80" cy="20" r="1"/><circle cx="20" cy="80" r="1"/></g></svg>')`,
           }}
      />
      
      <div className="max-w-2xl text-center relative">
        <div className="flex justify-center mb-8">
          {/* Professional loading spinner */}
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-stone-200"></div>
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-amber-600 border-r-amber-700 absolute top-0 left-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🪵</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
            Loading...
          </h2>
          <p className="text-lg text-stone-600">
            Preparing your premium timber experience
          </p>
          <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2">
            <span className="text-amber-700 font-semibold text-sm tracking-wide">SINCE 1995</span>
          </div>
        </div>
        
        {/* Loading progress dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  )
} 