import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Teak Wood Collection',
    description: 'Premium teak wood products showcasing natural beauty and durability.',
    category: 'Products',
    imageSrc: '/images/gallery/teak-collection.jpg',
  },
  {
    id: 2,
    title: 'Modern Furniture Projects',
    description: 'Contemporary furniture pieces crafted from our premium timber products.',
    category: 'Projects',
    imageSrc: '/images/gallery/modern-furniture.jpg',
  },
  {
    id: 3,
    title: 'Interior Solutions',
    description: 'Complete interior solutions using our range of timber products.',
    category: 'Projects',
    imageSrc: '/images/gallery/interior-solutions.jpg',
  },
  {
    id: 4,
    title: 'HDHMR Applications',
    description: 'High Density High Moisture Resistant boards in various applications.',
    category: 'Products',
    imageSrc: '/images/gallery/hdhmr-applications.jpg',
  },
  {
    id: 5,
    title: 'Custom Milling Projects',
    description: 'Showcasing our custom milling capabilities and precision.',
    category: 'Services',
    imageSrc: '/images/gallery/custom-milling.jpg',
  },
  {
    id: 6,
    title: 'Wood Panels Collection',
    description: 'Our premium wood panels in various finishes and applications.',
    category: 'Products',
    imageSrc: '/images/gallery/wood-panels.jpg',
  },
  {
    id: 7,
    title: 'Commercial Projects',
    description: 'Large-scale commercial projects featuring our timber products.',
    category: 'Projects',
    imageSrc: '/images/gallery/commercial-projects.jpg',
  },
  {
    id: 8,
    title: 'Fenesta Solutions',
    description: 'Modern window and door solutions for contemporary spaces.',
    category: 'Products',
    imageSrc: '/images/gallery/fenesta-solutions.jpg',
  },
]

const categories = ['All', 'Products', 'Projects', 'Services']

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Gallery</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our collection of premium timber products and successful projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  {/* Add image here */}
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {item.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center sm:mt-40 lg:mt-56">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Interested in Our Products?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Contact us to learn more about our products and how they can benefit your project.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Contact Us
            </a>
            <a href="/products" className="text-sm font-semibold leading-6 text-gray-900">
              View Products <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 