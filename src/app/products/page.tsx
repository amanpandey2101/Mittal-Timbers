import Link from 'next/link'

const products = [
  {
    name: 'Teak Wood',
    description: 'Premium quality teak wood for furniture and construction.',
    href: '/products/teak-wood',
    imageSrc: '/images/teak-wood.jpg',
  },
  {
    name: 'Non-Teak Wood',
    description: 'High-quality non-teak wood options for various applications.',
    href: '/products/non-teak-wood',
    imageSrc: '/images/non-teak-wood.jpg',
  },
  {
    name: 'HDHMR',
    description: 'High Density High Moisture Resistant boards for superior durability.',
    href: '/products/hdhmr',
    imageSrc: '/images/hdhmr.jpg',
  },
  {
    name: 'MDF',
    description: 'Medium-Density Fibreboard for versatile applications.',
    href: '/products/mdf',
    imageSrc: '/images/mdf.jpg',
  },
  {
    name: 'Ply and Board',
    description: 'Complete range of plywood and board solutions.',
    href: '/products/ply-and-board',
    imageSrc: '/images/ply-board.jpg',
  },
  {
    name: 'Readymade Doors and Frames',
    description: 'Premium quality doors and frames for your spaces.',
    href: '/products/readymade-doors',
    imageSrc: '/images/doors.jpg',
  },
  {
    name: 'Mouldings',
    description: 'Decorative and functional mouldings for interior design.',
    href: '/products/mouldings',
    imageSrc: '/images/mouldings.jpg',
  },
  {
    name: 'Wood Panels',
    description: 'High-quality wood panels for various applications.',
    href: '/products/wood-panels',
    imageSrc: '/images/panels.jpg',
  },
  {
    name: 'Fenesta UPVC and Aluminium',
    description: 'Modern window and door solutions.',
    href: '/products/fenesta',
    imageSrc: '/images/fenesta.jpg',
  },
]

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our comprehensive range of premium timber products, crafted with quality and precision.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  {/* Add product image here */}
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={product.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 