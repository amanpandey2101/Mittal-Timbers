import { notFound } from 'next/navigation'
import Link from 'next/link'

const productCategories = {
  'teak-wood': {
    name: 'Teak Wood',
    description: 'Premium quality teak wood for furniture and construction.',
    features: [
      'Natural durability and resistance to decay',
      'Beautiful grain patterns and rich color',
      'Suitable for both indoor and outdoor applications',
      'Long-lasting and low maintenance',
    ],
    applications: [
      'Furniture making',
      'Flooring',
      'Outdoor decking',
      'Marine applications',
      'Architectural woodwork',
    ],
    specifications: {
      'Grade': 'Premium',
      'Moisture Content': '8-12%',
      'Density': '650-750 kg/m³',
      'Available Sizes': 'Custom sizes available',
    },
  },
  'non-teak-wood': {
    name: 'Non-Teak Wood',
    description: 'High-quality non-teak wood options for various applications.',
    features: [
      'Cost-effective alternative to teak',
      'Wide range of species available',
      'Good workability and finishing properties',
      'Suitable for various applications',
    ],
    applications: [
      'Furniture manufacturing',
      'Interior woodwork',
      'Construction',
      'Cabinetry',
    ],
    specifications: {
      'Grade': 'Standard to Premium',
      'Moisture Content': '8-12%',
      'Available Species': 'Multiple options',
      'Available Sizes': 'Custom sizes available',
    },
  },
  // Add more product categories here
}

export default async function ProductCategory({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const product = productCategories[category as keyof typeof productCategories]

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>
        </div>

        {/* Product Features */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Features</h2>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Applications</h2>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                {product.applications.map((application) => (
                  <li key={application} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Specifications</h2>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="sm:col-span-1">
                <dt className="text-sm font-medium leading-6 text-gray-900">{key}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Interested in {product.name}?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Contact us to learn more about our {product.name.toLowerCase()} products and how they can benefit your project.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Contact Us
            </Link>
            <Link href="/products" className="text-sm font-semibold leading-6 text-gray-900">
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 