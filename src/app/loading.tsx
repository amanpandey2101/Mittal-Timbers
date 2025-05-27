export default function Loading() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Loading...
        </p>
      </div>
    </div>
  )
} 