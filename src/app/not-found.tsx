import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Go back home
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact support <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 